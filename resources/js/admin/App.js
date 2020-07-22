import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/partials/Header';
import Sidebar from './components/partials/Sidebar';
import Footer from './components/partials/Footer';

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Sidebar/>

                <div className="content-wrapper">

                </div>

                <Footer/>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
