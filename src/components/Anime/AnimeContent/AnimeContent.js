import React from 'react';
import cx from 'classnames';
import styles from './AnimeContent.module.scss';

function AnimeContent (props) {
    const {animeSubHeader, animeHeader, animeDescription ,className} = props;
    return (
        <div className={cx(styles.container, className)}>
            <h2 className={styles.heading}>
                {animeHeader}
            </h2>
            <p className={styles.subHeading}>
                {animeSubHeader}
            </p>
            <p className={styles.text}>
                {animeDescription}
            </p>
        </div>
    );
}
export default AnimeContent;