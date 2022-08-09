import React from 'react';

function AnimeContent (props) {
    const {animeSubHeader, animeHeader, animeDescription} = props;
    return (
        <div>
            <h2>
                {animeHeader}
            </h2>
            <p>
                {animeSubHeader}
            </p>
            <p>
                {animeDescription}
            </p>
        </div>
    );
}
export default AnimeContent;