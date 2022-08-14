import React from 'react';
import styles from './NavList.module.scss';
import cx from 'classnames';
import DropDownList from "./DropDownList/DropDownList";

const NavListItem = (props) => {
    const {idLink: id, navItemName: itemName, dropDownList = []} = props;
    const dropDownItem = 'More';
    function isDropDown(name) {
        return name === dropDownItem;
    }

    return (
        <div className={styles.item}>
            <a href={id} className={styles.link}>
                {itemName}
                {isDropDown(itemName) && <DropDownList dropDownList={dropDownList}/>}
            </a>
        </div>
    );
}



const renderNavListItem = (navListItem) => {
    return (<NavListItem {...navListItem}/>)
}

const NavList = (props) => {
    const {navList = [], className} = props;
    
    return (
        <div id='nav' className={cx(styles.container, className)}>
           {navList && navList.map(renderNavListItem)}
        </div>
    );
}

export default NavList;