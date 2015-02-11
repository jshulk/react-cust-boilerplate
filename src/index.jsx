var React = require("react");
var  NewsList = require("./NewsList");
var $ = require("jquery");

require("../css/app.css");

$.ajax({
	url: "/json/items.json"
}).then(function(items){
	console.log("items", items);
	React.render(
		<NewsList items={items} />,
		document.body
	);
});

