import React, {Component} from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import Band from '../../components/Band/Band';
import Tour from '../../components/Tour/Tour';
import Contact from '../../components/Contact/Contact';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';
import Anime from '../../components/Anime/Anime';


class HomePage extends Component {
  render() {  
    return ( 
      <div id="layout">
        <div id="main">
          <Header  />
          <Slider />
          <div id="content">
            <Band className={"firstBand"}/>
            <Tour />
            <Anime />
            <Contact />
            <Map />
          </div>
          <Band />
          <Footer />
        </div>

      </div>
    );
  }
}

         
export default HomePage;

{/* // <div id="mobile-menu" className="mobile-menu-btn">
            //     <i className="menu-icon ti-menu"></i>
            // </div>
            // * <!-- Begin: Search button --> *
            // <div className="search-btn">
            //     <i className="search-icon ti-search"></i>
            // </div>
<script>
        const buyBtns = document.querySelectorAll('.js-buy-ticket');
        const modal = document.querySelector('.modal');
        const modalClose = document.querySelector('.js-modal-close');
        const modalContainer = document.querySelector('.js-modal-container');

        function showBuyTickets() {
            modal.classList.add('open');
        }

        function hideBuyTickets() {
            modal.classList.remove('open');
        }

        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets);
        }

        modalClose.addEventListener('click', hideBuyTickets);
        modal.addEventListener('click', hideBuyTickets);

        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation();
        })
    </script>

    <script>
         Click menu-button thi open, click cai nua thi close
        var headerElement = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = headerElement.clientHeight;

        mobileMenu.onclick = function () {
            var isClosed = headerElement.clientHeight === headerHeight;
            if (isClosed) {
                headerElement.style.height = 'auto';
            } else {
                headerElement.style.height = null; an menu di
            }
        }

         Tu dong dong menu 
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
    </script>


    

 */}
