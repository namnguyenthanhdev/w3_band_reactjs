import React from 'react';

const SubNavListItem = (props) => {
    const {idLink: id, subNavItemName: itemName} = props;
    return (      
        <li>
            <a href={id}>{itemName}</a>
        </li>      
    );
}



const DropDownList = (props) => {
    const {subNavList = [] } = props;

    const renderSubNavList = (item) => {
        return (<SubNavListItem {...item} />)
    }
    
    return (
        <li id='nav'>
            <a href="#">
                More
            <i className="nav-arrow-down ti-angle-down"></i>
            </a>
            <ul className="subnav">
                {subNavList && subNavList.map(renderSubNavList)}     
            </ul>        
        </li>
    );
}

export default DropDownList;