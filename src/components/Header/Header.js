import React, {Component} from 'react';
import '../../assets/fonts/themify-icons/themify-icons.css';


import NavList from './NavList/NavList';
import SubNavList from './SubNavList/SubNavList';

class Header extends Component {

  constructor (props) {
    super(props);
    this.state = {
      ...headerComponent,
    };
  }
  render () {
    const {navList = [], subNavList = []} = this.state;
      return (
          <div id='header'>
            <ul id="nav">
              <NavList navList={navList} id="nav"/>
              <SubNavList subNavList={subNavList} id="nav"/>
            </ul>

              <div id="mobile-menu" className="mobile-menu-btn">
                  <i className="menu-icon ti-menu"></i>
              </div>
              
              <div className="search-btn">
                  <i className="search-icon ti-search"></i>
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
        // {
        //   idLink: '#',
        //   navItemName: 'More',
        // },
      ],
          //icon <i className="nav-arrow-down ti-angle-down"></i>
      subNavList: [
          {
            idLink:'#',
            subNavItemName:'Merchandise',
          },
          {
            idLink:'#',
            subNavItemName:'Extras',
          },
          {
            idLink:'#',
            subNavItemName:'Media',
          },
        ],
 }

 export default Header;