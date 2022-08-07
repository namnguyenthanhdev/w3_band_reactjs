import React, {Component} from 'react';
import TourContent from './TourContent/TourContent';
import TourPlacesList from './TourPlaces/TourPlaces';
import TourTicketList from './TourTicket/TourTicket';
import Modal from "../Modal/Modal";


class Tour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenTourModal: false,
            tourComponent: tourComponent
        }
    }

    onTourPlaceItemClick = () => {
        this.setState({isOpenModal: true});
    }

    render() {
        const {isOpenModal} = this.state || {};
        return (
            <div id="tour" className="tour-section">
                {isOpenModal && <Modal/>}
                <div className="content-sections">
                    <TourContent tourHeading={this.state.heading} tourSubHeading={this.state.subHeading}/>
                    <TourTicketList tourTicketList={this.state.ticketInfo}/>
                    <TourPlacesList onItemClick={this.onTourPlaceItemClick} tourPlacesList={this.state.placeInfo}/>

                </div>
            </div>
        );
    }
}


const tourComponent = {
    heading: 'TOUR DATES',
    subHeading: 'Remember to book your tickets!',
    ticketInfo: [
        {
            time: 'September',
            status: 'Sold out',
        },
        {
            time: 'October',
            status: 'Sold out',
        },
        {
            time: 'November',
            status: '3',
        },
    ],
    placeInfo: [
        {
            image: '../../assets/img/places/place1.jpg',
            heading: 'New York',
            time: 'Fri 27 Nov 2016',
            description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo',
        },
        {
            image: '../../assets/img/places/place2.jpg',
            heading: 'Paris',
            time: 'Sat 28 Nov 2016',
            description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo',
        },
        {
            image: '../../assets/img/places/place3.jpg',
            heading: 'San Francisco',
            time: 'Sun 29 Nov 2016',
            description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo',
        },
    ]

}


export default Tour;


{/* <div className="row place-list">
                        <div className="mt-16 s-col-full col col-third">
                            <img src={require("../../assets/img/places/place1.jpg")} alt="New York" className="place-img"/>
                            <div className="place-content">
                                <h3 className="place-heading">New York</h3>
                                <p className="place-time">Fri 27 Nov 2016</p>
                                <p className="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button className="btn js-buy-ticket s-full-width">Buy Tickets</button>
                            </div>
                        </div>
                        <div className="mt-16 s-col-full col col-third">
                            <img src={require("../../assets/img/places/place2.jpg")} alt="New York" className="place-img"/>
                            <div className="place-content">
                                <h3 className="place-heading">Paris</h3>
                                <p className="place-time">Sat 28 Nov 2016</p>
                                <p className="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button className="btn js-buy-ticket s-full-width">Buy Tickets</button>
                            </div>
                        </div>
                        <div className="mt-16 s-col-full col col-third">
                            <img src={require("../../assets/img/places/place3.jpg")} alt="New York" className="place-img"/>
                            <div className="place-content">
                                <h3 className="place-heading">San Francisco</h3>
                                <p className="place-time">Sun 29 Nov 2016</p>
                                <p className="place-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                <button className="btn js-buy-ticket s-full-width">Buy Tickets</button>
                            </div>
                        </div>
                    </div> */
}