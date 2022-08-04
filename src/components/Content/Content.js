 import React from 'react';
 import './Content.css';
 import './Band/BandList/BandList';
 
 

 <div id="content">
<div id=band class="content-sections">
    
    <div class="row member-list">
        <div class="mt-32 s-col-full col col-third text-center">
            <p class="member-name">Name</p>
            <img src="./assets/img/band-member/member1.jpg" alt="Name" class="member-img">
        </div>
        <div class="mt-32 s-col-full col col-third text-center">
            <p class="member-name">Name</p>
            <img src="./assets/img/band-member/member1.jpg" alt="Name" class="member-img">
        </div>
        <div class="mt-32 s-col-full col col-third text-center">
            <p class="member-name">Name</p>
            <img src="./assets/img/band-member/member1.jpg" alt="Name" class="member-img">
        </div>
    </div>
</div>
<div id=tour class="tour-section">
    <div class="content-sections">
        <h2 class="section-heading text-white">TOUR DATES</h2>
        <p class="section-sub-heading text-white">Remember to book your tickets!</p>
        <!-- tickets -->
        <ul class="ticket-list">
            <li>September <span class="sold-out">Sold out</span></li>
            <li>October<span class="sold-out">Sold out</span></li>
            <li>November <span class="quantity">3</span></li>
        </ul>
        <!-- places -->
        <div id="animeList" class="row place-list">
            <div class="mt-16 s-col-full col col-third">
                <img src="./assets/img/places/place1.jpg" alt="New York" class="place-img">
                <div class="place-content">
                    <h3 class="place-heading">New York</h3>
                    <p class="place-time">Fri 27 Nov 2016</p>
                    <p class="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                    <button class="btn js-buy-ticket s-full-width">Buy Tickets</button>
                </div>
            </div>
            <div class="mt-16 s-col-full col col-third">
                <img src="./assets/img/places/place2.jpg" alt="New York" class="place-img">
                <div class="place-content">
                    <h3 class="place-heading">Paris</h3>
                    <p class="place-time">Sat 28 Nov 2016</p>
                    <p class="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                    <button class="btn js-buy-ticket s-full-width">Buy Tickets</button>
                </div>
            </div>
            <div class="mt-16 s-col-full col col-third">
                <img src="./assets/img/places/place3.jpg" alt="New York" class="place-img">
                <div class="place-content">
                    <h3 class="place-heading">San Francisco</h3>
                    <p class="place-time">Sun 29 Nov 2016</p>
                    <p class="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                    <button class="btn js-buy-ticket s-full-width">Buy Tickets</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Begin-contact -->
<div id=contact class="content-sections">
    <h2 class="section-heading">CONTACT</h2>
    <p class="section-sub-heading">Fan? Drop a note!</p>

    <div class="row contact-content">
        <div class="col col-half s-col-full contact-info">
            <p><i class="ti-location-pin"></i>Chicago, US</p>
            <p><i class="ti-mobile"></i>Phone: <a href="tel:0982320221">0982320221</a></p>
            <p><i class="ti-email"></i>Email: <a
                    href="mailto:thanhnam21122012@gmail.com">thanhnam21122012@gmail.com</a></p>
        </div>
        <div class="col col-half s-col-full contact-form">
            <form action="" class="action">
                <div class="row">
                    <div class="col col-half s-col-full">
                        <input type="text" name="" required class="form-control" placeholder="Name">
                    </div>
                    <div class="col col-half s-col-full s-mt-8">
                        <input type="email" name="" required class="form-control" placeholder="Email">
                    </div>
                </div>
                <div class="row mt-8">
                    <div class="col col-full">
                        <input type="text" name="" required class="form-control" placeholder="Message">
                    </div>
                </div>

                <input class="mt-16 pull-right btn s-full-width" type="submit" value="SEND">
            </form>
        </div>
    </div>
</div>
<!-- End-contact -->
<div class="map-section">
    <img src="/assets/img/map/map.jpg" alt="Map">
</div>

</div> 