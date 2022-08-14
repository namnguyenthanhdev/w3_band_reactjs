import React, {Component} from 'react';
import BandMemberList from './BandList/BandList';
import BandContent from './BandContent/BandContent';
import cx from 'classnames';
import styles from './Band.module.scss'
import Modal from "../Modal/Modal";

class Band extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...bandComponent,
            isOpenModal: false,
            modalData: {}
        }
    };


    openModal = (item) => {
        this.setState({isOpenModal: true, modalData : item});
    }

    closeModal = () => {
        this.setState({isOpenModal: false, modalData: {}});
    }

    render() {
        const {className = ""} = this.props;
        const {bandContent = {}, bandMemberList = [], isOpenModal, modalData = {}} = this.state;
        return (
            <div id="band" className={cx(styles.background, className)}>
                <div className={cx(styles.container, className)}>
                    <BandContent
                        heading={bandContent.bandHeading}
                        subHeading={bandContent.bandSubHeading}
                        aboutText={bandContent.bandAboutText}/>
                    <BandMemberList onItemClick={this.openModal} data={bandMemberList}/>
                    {isOpenModal && <Modal itemName={modalData?.nameMember} onPayClick={this.closeModal}/>}
                </div>
            </div>
        );
    }
}

const bandComponent = {
    bandContent: {
        bandHeading: 'THE BAND',
        bandSubHeading: 'We love music',
        bandAboutText: `We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.`,
    },
    bandMemberList: [
        {
            idMember: 1,
            nameMember: 'Name 1',
            imgMember: require('../../assets/img/band-member/member1.jpg'),
        },
        {
            idMember: 2,
            nameMember: 'Name 2',
            imgMember: require('../../assets/img/band-member/member1.jpg'),
        },
        {
            idMember: 3,
            nameMember: 'Name 3',
            imgMember: require('../../assets/img/band-member/member1.jpg'),
        },
    ],

}

export default Band;