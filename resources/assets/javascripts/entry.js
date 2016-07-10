console.info("entry.js");
import ReactDOM from 'react-dom'  
var React = require('react');
var Second = require('./Second');
var Hello = React.createClass({

    render: function() {
		return (
			<div>
				Hello Word

			<Second />
			</div>
		);
		}
});
ReactDOM.render(<Hello />, document.getElementById("content"));
