import React from 'react';
import styles from './NavList.module.scss';
import cx from 'classnames';
import DropDownList from "./DropDownList/DropDownList";

const NavListItem = (props) => {
    const {idLink: id, navItemName: itemName, dropDownList = []} = props;

    function isDropDown() {
        return dropDownList && dropDownList.length > 0;
    }

    function renderItem() {
        if (isDropDown(itemName)) {
            return (
                <DropDownList className={styles.link} itemName={itemName} dropDownList={dropDownList}/>
            );
        }
        return <div className={styles.link} onClick={() => window.location.href = id}>{itemName}</div>
    }

    return (
        <div className={styles.item}>
            {renderItem()}
        </div>
    )
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