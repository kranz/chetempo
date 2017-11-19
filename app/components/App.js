var React = require('react');
var HelloWorld = require('./HelloWorld');
var Nav = require('./Nav');
var Main = require('./Main');

class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<Nav />
				<Main />
			</div>
		)
	}
}

module.exports = App;