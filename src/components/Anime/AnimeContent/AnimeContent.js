import React from 'react';

function AnimeContent (props) {
    const {aboutText, heading, subHeading} = props;
    return (
        <div>
            <h2>
                {heading}
            </h2>
            <p>
                {subHeading}
            </p>
            <p>
                {aboutText}
            </p>
        </div>
    );
}
export default AnimeContent;