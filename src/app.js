var _ = require("lodash"),
	$ = require('jquery'),
	NewsList = require("./NewsList"),
	React = require("react");

$.ajax({
  url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
  dataType: 'json'
}).then(function (stories) {
  // Get the item details in parallel
  var detailDeferreds = _(stories.slice(0, 30)).map(function (itemId) {
    return $.ajax({
      url: 'https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json',
      dataType: 'json'
    });
  }).value();
  return $.when.apply($, detailDeferreds);
}).then(function () {
  // Extract the response JSON
  var items = _(arguments).map(function (argument) {
    return argument[0];
  }).value();

  // Render the items
  React.render(<NewsList items={items}/>, document.body);
});

