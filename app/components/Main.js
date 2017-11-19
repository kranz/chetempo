var React = require('react');
var Zipcode = require('./Zipcode');

class Main extends React.Component {
	render() {
		var imgUrl = './app/images/pattern.svg';
		var bgStyle = {
			backgroundImage: 'url(' + imgUrl + ')'
		};
		return (
			<div className='home-container' style={bgStyle}>
				<h1 className='header'>Enter a City and State</h1>
				<Zipcode orient='column' />
			</div>
		)
	}
}

module.exports = Main;