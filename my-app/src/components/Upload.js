import React, { Component } from 'react';
/* Import css style */
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import ethereumsvg from '../images/ethereum.svg';
import upload from '../images/upload.svg';
/* Util */
import * as eth from '../ethereum/ethereumController.js';
import config from '../config';
/* React Components */
import { Button } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';

class Upload extends Component {
	constructor(props) {
		super(props)
		this.state = { defaultaccount: '0x0', contractaddress: '0x0' }
	}

	async componentWillMount() {
		console.log("* * COMPONENT WILL MOUNT ")
		this.setState({
			defaultaccount: await eth.getDefaultAccount(),
			contractaddress: await eth.address
		})
	}

	async componentDidUpdate() {
		console.log(" * * Component Did UPDATE * *")
		eth.getMetamaskEvent().then(event => {
			console.log("- - ComponentdidMount EVENTTTTT - - ")
			window.location.reload()
		})
	}


	async uploadSite() {
        var x = await eth.uploadSite("_producto", "")
    }

	render() {
		console.log("* * Component APP Render * *")

		return (
			<div className="App">
				<Header defaultaccount={this.state.defaultaccount} contractaddress={this.state.contractaddress} />

				<header className="App-header">
					<h1 className="tittle">ArpanetOS</h1>
					<p className="subtittle"> Creando el nuevo internet de la confianza entre todos y para todos</p>
					<hr className="my-2" />
					<img className="image-reputation" src={upload} alt="Upload" />
					
					FILE
					<input></input> 

					<Button className="button" color="primary" onClick={e => this.uploadSite()}> Upload</Button>
				</header>

				<div className="App-body">
					<Footer />
				</div>
			</div>
		);
	}
}

export default Upload;
