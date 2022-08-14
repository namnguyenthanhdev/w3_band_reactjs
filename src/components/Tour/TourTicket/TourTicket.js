import React from 'react';
import styles from './TourTicket.module.scss';
import cx from 'classnames';


const soldTicket = 'Sold out';

const TourTicket = (props) => {
    const {
        status: ticketStatus,
        time: ticketDate,
    } = props;

    if (ticketStatus === soldTicket) {
        return(
            <div className={styles.item}>
                <p className={styles.text}>{ticketDate} </p>
                <p className={styles.soldOut}>{ticketStatus}</p>
            </div>
        ) ;
    }
    else {
        return (
            <div className={styles.item}>
                <p className={styles.text}>{ticketDate} </p>
                <p className={styles.quantity}>{ticketStatus}</p>
            </div>
        );
    }
}

// function checkStatusTicket(tourTicket) {
    
// }

const TourTicketList = (props) => {
    const {tourTicketList = [], className} = props;
    const renderTourTicketList = (tourTicketItem) => {
        return (<TourTicket {...tourTicketItem}/>);  
    }
    return (
        <div className={cx(styles.container, className)}>
                {tourTicketList.map(renderTourTicketList)}
        </div>
    );
}

export default TourTicketList;