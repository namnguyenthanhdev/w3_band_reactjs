import React, {Component} from 'react';
import TourContent from './TourContent/TourContent';
import TourPlacesList from './TourPlaces/TourPlaces';
import TourTicketList from './TourTicket/TourTicket';
import Modal from "../Modal/Modal";


class Tour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModal: false,
            modalData: {},            
            ...tourComponent,
        }
    }

    
    openModal = (item) => {
        this.setState({isOpenModal: true, modalData: item.results});
    }
    closeModal = () => {
        this.setState({isOpenModal: false, modalData: {}});
    }

    render() {
        const {heading, subHeading, ticketInfo = [], placeInfo = [], isOpenModal, modalData = {}} = this.state;
        return (
            <div id="tour" className="tour-section">
                <div className="content-sections">
                    <TourContent tourHeading={heading} tourSubHeading={subHeading}/>
                    <TourTicketList tourTicketList={ticketInfo}/>
                    <TourPlacesList onItemClick={this.openModal} tourPlacesList={placeInfo}/>
                    {isOpenModal && <Modal itemName={modalData?.title} onPayClick={this.closeModal}/>}
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
            image: require('../../assets/img/places/place1.jpg'),
            heading: 'New York',
            time: 'Fri 27 Nov 2016',
            description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo',
        },
        {
            image: require('../../assets/img/places/place2.jpg'),
            heading: 'Paris',
            time: 'Sat 28 Nov 2016',
            description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo',
        },
        {
            image: require('../../assets/img/places/place3.jpg'),
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