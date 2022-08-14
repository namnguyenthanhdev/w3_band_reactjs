import React from 'react';
import cx from 'classnames';
import styles from './ContactContent.module.scss';

const ContactContent = (props) => {
    const {contactHeading, contactSubHeading, className} = props;
    return (
        <div className={cx(styles.containerHeader, className)}>
            <h2 className={styles.heading}>{contactHeading}</h2>
            <p className={styles.subHeading}>{contactSubHeading}</p>
        </div>
    );
}

export default ContactContent;