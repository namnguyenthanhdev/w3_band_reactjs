import React from 'react';

import './Toolbar.css';
import '../../assets/fonts/themify-icons/themify-icons.css';


{/* <script>
        // Click menu-button thi open, click cai nua thi close
        var headerElement = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = headerElement.clientHeight;

        mobileMenu.onclick = function () {
            var isClosed = headerElement.clientHeight === headerHeight;
            if (isClosed) {
                headerElement.style.height = 'auto';
            } else {
                headerElement.style.height = null; //an menu di
            }
        }

        // Tu dong dong menu 
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

        for (i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];

            menuItem.onclick = function (Event) {
                var isParentMenu = this.menuItem.nextElementSibling && this.menuItem.nextElementSibling.classList.contains('subnav');
                console.log(isParentMenu);
                if (isParentMenu) {
                    event.preventDefault;
                } else {
                    headerElement.style.height = null;

                }
            }

        }
    </script> */}


const toolbar = props => (
    <header className="Toolbar">
        <nav className="Toolbar_Nav">
            {/* <div>
            <DrawerToggleButton />
            </div> */}
            <div className="Toolbar_Nav_Items">
                <ul>
                    {/* <div className="Toolbar_Logo"><a href="/">THE LOGO</a></div> */}
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Band</a></li>
                    <li><a href="/">Tour</a></li>
                    <li><a href="/">Contact</a></li>
                    <li>
                        <a href="#">
                            More
                            <i class="Nav_ArrowDown ti-angle-down"></i>
                        </a>
                        {/* <div clasName="Toolbar_SubNav"> */}
                            <ul className="Toolbar_SubNav_Items">
                                <li><a href="#">Merchandise</a></li>
                                <li><a href="#">Extras</a></li>
                                <li><a href="#">Media</a></li>
                            </ul>
                        {/* </div> */}
                    </li>
                </ul>
                <div className="Spacer"></div>
                <div class="SearchBtn">
                    <i class="SearchBtn ti-search"></i>
                </div>
            </div>
        </nav>
        <div id="Mobile_Menu" class="Mobile_Menu_Btn">
                <i class="MenuIcon ti-menu"></i>
            </div>
    </header>
);

export default toolbar;