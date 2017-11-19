var React = require('react');
var PropTypes = require('prop-types');


class Zipcode extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			orient: props.orient
		};
	}
	render() {
		var btnStyle = { margin: '10px' };
		var compStyle = { flexDirection: this.state.orient };

		return (
			<div className='zipcode-container' style={compStyle}>
				<label className='header' htmlFor='zipcode'>
				    
				</label>
			  	<input
				    placeholder='St. George, Utah'
				    type='text'
			    	className='form-control'
				  />
				  <button
				    className='btn btn-success'
			    	type='button'
			    	style={btnStyle}>
			    	Get Weather
				  </button>  
			</div>
		)
	}
}

Zipcode.propTypes = {
	orient: PropTypes.string.isRequired
}

Zipcode.defaultProps = {
	orient: 'column'
}
module.exports = Zipcode;