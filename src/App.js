import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import Slider from './components/Slider/Slider';
import Content from './components/Content/Content';
import BandList from './components/Content/Band/BandList/BandList';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {  
        return (
        <div className="App">
            <Toolbar />
        </div>
        );
    }
    render() {
        return (
        <div className="App">
            <Slider />
        </div>
        );
    }
    render() {
        return (
        <div className="App">
            <Content />
        </div>
        );
    }
    render() {
        return (
            <div className="App">
                <BandList />
            </div>
            );
    }
    render () {
        return (
        <div className="App">
            <Footer />
        </div>
        );
    }
}
  
export default App;