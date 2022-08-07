import React from 'react';


const soldTicket = 'Sold out';

const TourTicket = (props) => { 
    const tourTicket = props.propsTourTicket || {};
    if (tourTicket.status === soldTicket) {
        return(
            <li>
                {tourTicket.time} 
                <span className="sold-out">{tourTicket.status}</span>
            </li>
        ) ;
    }
    else {
        return (
            <li>
                {tourTicket.time} 
                <span className="quantity">{tourTicket.status}</span>
            </li>
        );
    }
}

// function checkStatusTicket(tourTicket) {
    
// }

const TourTicketList = (props) => {
   
    const propsTourTicketList = props.tourTicketList || [];
    const renderTourTicketList = (tourTicketItem) => {
        return (<TourTicket propsTourTicket={tourTicketItem}/>);  
    }
    return (
        <ul className="ticket-list">
            {propsTourTicketList.map(renderTourTicketList)}
        </ul>
    );
}

export default TourTicketList;