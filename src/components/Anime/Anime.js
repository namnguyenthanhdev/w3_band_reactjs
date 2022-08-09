import React, { Component } from 'react';
import AnimeContent from './AnimeContent/AnimeContent';
import AnimeList from './AnimeList/AnimeList';
import Modal from '../Modal/Modal';

class Anime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...animeInfo,
            animeList: [],
            isOpenModal: false,
            modalData: {},
        }
    }

    openModal = (item) => {
        this.setState({isOpenModal: true, modalData: item.results});
    }
    closeModal = () => {
        this.setState({isOpenModal: false, modalData: {}});
    }

    componentDidMount() {
        try{
            fetch('https://api.jikan.moe/v3/search/anime?q=naruto')
            .then(res => {
                return res.json();
            })
            .then (data => {
                this.setState({animeList: data.results})
            })
        } catch (e) {
            console.log(e);
        }
    }

    render () {
        const {heading, subHeading, description, animeList = [], isOpenModal, modalData = {}} = this.state;

        return (
            <div id='anime'>
                <AnimeContent 
                    animeHeader={heading}
                    animeSubHeader={subHeading}
                    animeDescription={description}
                />
                <AnimeList onItemClick={this.openModal} data={animeList}/>
                {isOpenModal && <Modal itemName={modalData?.title} onPayClick={this.closeModal}/>}
            </div>
        );
    }


}

const animeInfo = {
    heading: "Github makes me so sick!",
    subHeading: "Please succeed from now please, I'm really exhausted!",
    description: `We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
}

export default Anime;
