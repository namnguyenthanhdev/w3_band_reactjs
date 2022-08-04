import React from 'react';
import BandItem from '../BandItem/BandItem';
import '.BandList.css';

class BandList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            BandList: []
        };
    }

    renderBandItem = (item) => {
        return (<BandItem {...item} />);
     }
    
     render () {
        const {bandList = [] } = this.state || {};
        return (
        <div className={"bandList"}>
            <p>Test</p>
            {bandList.map(this.renderBandItem)}
            <p>Test</p> 
    
        </div>);
     }
 }

 
 export default BandList;