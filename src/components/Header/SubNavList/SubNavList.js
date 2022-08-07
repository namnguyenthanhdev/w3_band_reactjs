import React from 'react';


const SubNavListItem = (props) => {
    return (      
        <li>
            <a href={props.propsSubNavList.idLink}>
                {props.propsSubNavList.subNavItemName}
            </a>
        </li>      
    );
}

const renderSubNavList = (subNavListItem) => {
    return (<SubNavListItem propsSubNavList={subNavListItem} />)
}

const SubNavList = (props) => {
    const { subNavList: propsSubNavList = [] } = props;
    
    return (
        <li id='nav'>
            <a href="#">
                More
            <i className="nav-arrow-down ti-angle-down"></i>
            </a>
            <ul className="subnav">
                {propsSubNavList.map(renderSubNavList)}     
            </ul>        
        </li>
    );
}

export default SubNavList;