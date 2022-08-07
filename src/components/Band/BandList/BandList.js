import React from 'react';
import './BandList.css';

const BandMember = (props) => {
    return (
        <div className="mt-32 s-col-full col col-third text-center">
            <p className="member-name">{props.propsMember.nameMember}</p>
            <img src={props.propsMember.imgMember} alt={props.propsMember.nameMember} className="member-img" />
        </div>                       
    );
}

const renderBandItemList = (bandMemberItem) => {
    return (<BandMember key={bandMemberItem.id} propsMember={bandMemberItem} />)
}

const BandMemberList = (props) => {
    const propsMemberList = props.bandMemberList;
    return (
        <div className="row member-list">
            {propsMemberList.map(renderBandItemList)}
        </div>
        
    );
}

 
 export default BandMemberList;