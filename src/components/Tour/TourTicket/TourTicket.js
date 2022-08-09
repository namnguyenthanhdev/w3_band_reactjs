import React from 'react';


const soldTicket = 'Sold out';

const TourTicket = (props) => {
    const {
        status: ticketStatus,
        time: ticketDate,
    } = props; 
    if (ticketStatus === soldTicket) {
        return(
            <li>
                {ticketDate} 
                <span className="sold-out">{ticketStatus}</span>
            </li>
        ) ;
    }
    else {
        return (
            <li>
                {ticketDate} 
                <span className="quantity">{ticketStatus}</span>
            </li>
        );
    }
}

// function checkStatusTicket(tourTicket) {
    
// }

const TourTicketList = (props) => {
    const {tourTicketList = []} = props;
    const renderTourTicketList = (tourTicketItem) => {
        return (<TourTicket {...tourTicketItem}/>);  
    }
    return (
        <ul className="ticket-list">
            {tourTicketList.map(renderTourTicketList)}
        </ul>
    );
}

export default TourTicketList;