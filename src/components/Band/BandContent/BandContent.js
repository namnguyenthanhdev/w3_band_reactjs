import React from 'react';
import styles from './BandContent.module.scss';
import cx from 'classnames';

function BandContent(props) {
    const {className, aboutText, heading, subHeading} = props;
    return (
        <div className={cx(styles.container, className)}>
            <h2 className={styles.heading}>
                {heading}
            </h2>
            <p className={styles.subHeading}>
                {subHeading}
            </p>
            <p className={styles.text}>
                {aboutText}
            </p>
        </div>
    );
}

export default BandContent;