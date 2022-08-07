import React from 'react';
import Modal from '../../Modal/Modal';

const TourPlacesItem = (props) => {
    const tourPlaces = props.propsTourPlaces;
    return (
        <div>
            <img src={tourPlaces.image} alt={tourPlaces.heading} className="place-img"/>
            <div className="place-content">
                <h3 className="place-heading">
                    {tourPlaces.heading}
                </h3>
                <p className="place-time">
                    {tourPlaces.time}
                </p>
                <p className="place-desc">
                    {tourPlaces.description}
                </p>
                <button className="btn s-full-width" onClick={handleClick}>Buy Tickets</button>
            </div>
        </div>
    );
}



const handleClick = () => {
    
}



const TourPlacesList = (props) => {
    const propsTourPlacesList = props.tourPlacesList || {};
    const renderTourPlaces = (tourPlaceItem) => {
        return (<TourPlacesItem propsTourPlaces={tourPlaceItem} />);
    }

    return (
        <div className="row place-list" >
            <div className="mt-16 s-col-full col col-third">
                {propsTourPlacesList && propsTourPlacesList.map(renderTourPlaces)}  
            </div>
            
        </div>  
    );
};

// const buyBtns = document.querySelectorAll('.js-buy-ticket');
//         const modal = document.querySelector('.modal');
//         const modalClose = document.querySelector('.js-modal-close');
//         const modalContainer = document.querySelector('.js-modal-container');

//         function showBuyTickets() {
//             modal.classList.add('open');
//         }

//         function hideBuyTickets() {
//             modal.classList.remove('open');
//         }

//         for (const buyBtn of buyBtns) {
//             buyBtn.addEventListener('click', showBuyTickets);
//         }

//         modalClose.addEventListener('click', hideBuyTickets);
//         modal.addEventListener('click', hideBuyTickets);

//         modalContainer.addEventListener('click', function (event) {
//             event.stopPropagation();
//         })

export default TourPlacesList;