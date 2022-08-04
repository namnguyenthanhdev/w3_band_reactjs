import React from 'react';
import './BandItem.css';

const info = [
    {
        name: "Name 1",
        image: "../../../assets/img/band-member/member1",
    },
    {
        name: "Name 2",
        image: "../../../assets/img/band-member/member1",
    },
    {
        name: "Name 3",
        image: "../../../assets/img/band-member/member1",
    },
]
export default class BandItem extends React.Component {
    
    render() {
        const {name, image} = this.props;
        return (
            <div className={"band-item"}>
                <h2 class="section-heading">THE BAND</h2>
                <p class="section-sub-heading">We love music</p>
                <p class="about-text">
                    We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
                <div className={"band-member"}>
                    <p className="member-name">{name}</p>
                    <img src={image} alt={"name"} />
                </div>
            </div>
            
            
        );
    }
}