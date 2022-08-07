import React from 'react';

const NavListItem = (props) => {
    return (
        <li>
            <a href={props.propsNavListItem.idLink}>
                {props.propsNavListItem.navItemName}
            </a>
        </li>
    );
}

const renderNavListItem = (navListItem) => {
    return (<NavListItem propsNavListItem={navListItem}/>)
}

const NavList = (props) => {
    const {navList: propsNavList = []} = props;
    
    return (
        <div id='nav'>
           {propsNavList.map(renderNavListItem)}
        </div>
    );
}

export default NavList;