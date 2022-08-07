import React from 'react';

const TourContent = (props) => {
    return (
        <div>
            <h2 className="section-heading text-white">{props.heading}</h2>
            <p className="section-sub-heading text-white">{props.subHeading}</p>
        </div>

        
    );
}

export default TourContent;