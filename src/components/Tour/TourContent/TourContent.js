import React from 'react';
import styles from './TourContent.module.scss';
import cx from 'classnames';

const TourContent = (props) => {
    const {tourHeading, tourSubHeading, className} = props;
    return (
        <div className={cx(styles.container, className)}>
            <h2 className={styles.heading}>{tourHeading}</h2>
            <p className={styles.subHeading}>{tourSubHeading}</p>
        </div>

        
    );
}

export default TourContent;