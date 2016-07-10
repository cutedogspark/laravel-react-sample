console.info("entry.js");
import ReactDOM from 'react-dom'  
var React = require('react');
var Hello = React.createClass({

    render: function() {
		return (

			<div>Hello Word</div>
		);
		}
});
ReactDOM.render(<Hello />, document.getElementById("content"));
