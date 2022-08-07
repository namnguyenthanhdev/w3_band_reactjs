import React from 'react';

const BandContent = (props) => {
    const propsContent = props.bandContent;
    return (
        <div>
            <h2 className="section-heading">
                {propsContent.bandHeading}
            </h2>
            <p className="section-sub-heading">
                {propsContent.bandSubHeading}
            </p>
            <p className="about-text">
                {propsContent.bandAboutText}
            </p>
        </div>
    );
}

export default BandContent;