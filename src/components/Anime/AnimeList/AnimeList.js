import React from 'react';

const AnimeItem = (props) => {
    const {
        url: movieLink,
        title: movieTitle, 
        episodes: movieEpisodes,
        image_url: img, 
        onClick = () => {},

    } = props;

    function handleClick() {
        onClick(props);
    }

    function handleButtonClick() {
        window.open(movieLink);
    }

    return (
        <div>
            <p>{movieTitle}</p>
            <p>{movieEpisodes}</p>
            <img src={img} alt={movieTitle} />
            <button onClick={handleButtonClick}>Click here</button>
            <button onClick={handleClick}>Buy here</button>
        </div>
    );

}

const AnimeList = (props) => {
    const {data = [], onItemClick = () => {}} = props;

    const renderMovieItem = (item) => {
        return (<AnimeItem onClick={onItemClick} {...item}/>);
    }

    return (
        <div>
            {data.map(renderMovieItem)}  
        </div>
    );
}

export default AnimeList;