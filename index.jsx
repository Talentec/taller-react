require("./node_modules/bootstrap/dist/css/bootstrap.min.css")

import React, {Component} from 'react'; //var React = require('react');
import ReactDOM from 'react-dom';

// Components
import Header from './src/components/Header';


export class App extends Component {
	render() {
		return (
			<div>
				<Header pagina="Index" user={{'name': "Erick", 'last_name': 'Arroyo'}} />
				
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
