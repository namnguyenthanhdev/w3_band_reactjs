import React, {Component} from 'react';
import '../../assets/fonts/themify-icons/themify-icons.css';
import styles from './Header.module.scss';
import cx from 'classnames';

import NavList from './NavList/NavList';
import DropDownList from './NavList/DropDownList/DropDownList';

class Header extends Component {

  constructor (props) {
    super(props);
    this.state = {
      ...headerComponent,
    };
  }



  render () {
    const {navList = [], dropDownList = []} = this.state;
    const {className} = this.props;



    return (
          <div id='header' className={cx(styles.background, styles.display, className)}>
              <div className={cx(styles.container, className)}>
                  <div className={styles.navItem}>
                      <NavList navList={navList} />
                  </div>

                      {/*{<div> navList.at(5) && <DropDownList dropDownList={dropDownList} /> </div>}*/}
                  {/*<div>*/}
                  {/*    <i className="ti-menu"></i>*/}
                    <div className={cx(styles.searchIcon, className)}>
                        <i className={cx(styles.icon,'ti-search')}></i>
                        <i className={cx(styles.icon,'ti-search')}></i>
                        <i className={cx(styles.icon,'ti-search')}></i>

                    </div>
              </div>
          </div>
      )
  }
 }

 const headerComponent = {
    navList: [
        {
          idLink: '#',
          navItemName: 'Home',
        },
        {
          idLink: '#band',
          navItemName: 'Band',
        },
        {
          idLink: '#tour',
          navItemName: 'Tour',
        },
        {
          idLink: '#anime',
          navItemName: 'Anime',
        },
        {
          idLink: '#contact',
          navItemName: 'Contact',
        },
        {
          idLink: '#',
          navItemName: 'More', dropDownList: [{
                idLink: '#', dropDownItemName: 'Merchandise',
            }, {
                idLink: '#', dropDownItemName: 'Extras',
            }, {
                idLink: '#', dropDownItemName: 'Media',
            },],
        },
      ],
          //icon <i className="nav-arrow-down ti-angle-down"></i>

 }

 export default Header;