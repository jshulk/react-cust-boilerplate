var React = require("react");
var HelloComponent = React.createClass({
	render: function(){
		return <h1>Hello, World</h1>;
	}
});

React.render(
	<HelloComponent />,
	document.body
)