var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var HelloWorld = require('./components/HelloWorld');

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('app')
)
