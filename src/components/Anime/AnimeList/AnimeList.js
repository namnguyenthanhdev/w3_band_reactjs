import React from 'react';
import styles from './AnimeList.module.scss';
import cx from 'classnames';

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
        <div className={styles.item}>
            <img src={img} alt={movieTitle} className={styles.img}/>
            <div className={styles.content}>
                <p onClick={handleButtonClick} className={styles.header}>{movieTitle}</p>
                <p className={styles.description}>{`Episode: ${movieEpisodes}`}</p>
            </div>
            <button onClick={handleClick} className={styles.button}>Buy here</button>



        </div>
    );

}

const AnimeList = (props) => {
    const {data = [], onItemClick = () => {}, className} = props;

    const renderMovieItem = (item) => {
        return (<AnimeItem onClick={onItemClick} {...item}/>);
    }

    return (
        <div className={cx(styles.container, className)}>
            {data.map(renderMovieItem)}  
        </div>
    );
}

export default AnimeList;