var React = require('react');
var Zipcode = require('./Zipcode');

class Nav extends React.Component {
	render() {
		return (
			<div className='navbar'>
				<h1>Clever Title</h1>
				<Zipcode orient='row' />
			</div>
		)
	}
}

module.exports = Nav;