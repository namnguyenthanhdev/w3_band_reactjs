import React from 'react';
import styles from './TourPlaces.module.scss';
import cx from 'classnames';


const TourPlacesItem = (props) => {
    const {
        image: img,
        heading: header,
        time: schedule,
        description: scripts,
        onClick = () => {},
        className,
    } = props;
    

    function handleClick() {
        onClick && onClick(props);
    }

    return (
        <div className={cx(styles.item, className)}>
            <img src={img} alt={header} className={styles.img}/>
            <div className={styles.content}>
                <p className={styles.header}>{header}</p>
                <p className={styles.subHeader}>{schedule}</p>
                <p className={styles.description}>{scripts}</p>
                <button className={styles.button} onClick={handleClick}>Buy Tickets</button>

            </div>
        </div>
    );
}

 
const TourPlacesList = (props) => {
    const {
        tourPlacesList = [],
        onItemClick = () => {},
        className
    } = props;

    function handleItemClick(item) {
        onItemClick && onItemClick(item);
    }

    const renderTourPlaces = (tourPlaceItem) => {
        return (<TourPlacesItem onClick={handleItemClick} {...tourPlaceItem}/>);
    }

    return (
        <div className={cx(styles.container, className)}>
            {tourPlacesList && tourPlacesList.map(renderTourPlaces)}
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