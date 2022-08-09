import React from 'react';

const TourContent = (props) => {
    const {tourHeading, tourSubHeading} = props;
    return (
        <div>
            <h2 className="section-heading text-white">{tourHeading}</h2>
            <p className="section-sub-heading text-white">{tourSubHeading}</p>
        </div>

        
    );
}

export default TourContent;