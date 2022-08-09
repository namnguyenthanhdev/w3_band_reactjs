import React from 'react';

const TourPlacesItem = (props) => {
    const {
        image: img,
        heading: header,
        time: schedule,
        description: scripts,
        onClick = () => {},
    } = props;
    

    function handleClick() {
        onClick && onClick(props);
    }

    return (
        <div>
            <img src={img} alt={header} className="place-img"/>
            <div className="place-content">
                <h3 className="place-heading">{header}</h3>
                <p className="place-time">{schedule}</p>
                <p className="place-desc">{scripts}</p>
                <button className="btn s-full-width" onClick={handleClick}>Buy Tickets</button>
            </div>
        </div>
    );
}

 
const TourPlacesList = (props) => {
    const {
        tourPlacesList = [],
        onItemClick = () => {},
    } = props;

    function handleItemClick(item) {
        onItemClick && onItemClick(item);
    }

    const renderTourPlaces = (tourPlaceItem) => {
        return (<TourPlacesItem onClick={handleItemClick} {...tourPlaceItem}/>);
    }

    return (
        <div className="row place-list">
            <div className="mt-16 s-col-full col col-third">
                {tourPlacesList && tourPlacesList.map(renderTourPlaces)}
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