import React from 'react';

const NavListItem = (props) => {
    const {idLink: id, navItemName: itemName} = props;
    return (
        <li>
            <a href={id}>
                {itemName}
            </a>
        </li>
    );
}

const renderNavListItem = (navListItem) => {
    return (<NavListItem {...navListItem}/>)
}

const NavList = (props) => {
    const {navList = []} = props;
    
    return (
        <div id='nav'>
           {navList && navList.map(renderNavListItem)}
        </div>
    );
}

export default NavList;