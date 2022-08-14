import React from 'react';
import '../../../../assets/fonts/themify-icons/themify-icons.css';
import cx from "classnames";
import styles from './ContactInform.module.scss'
const PHONE = 'Phone: ';
const EMAIL = 'Email: ';

const ContactInform = (props) => {
    const {contactInfo = {}, className} = props;
    return (
        <div className={cx(styles.containerInfo, className)}>
            <div className={styles.item}>
                <p className={styles.name}><i className={cx("ti-location-pin", styles.icon)}></i>{contactInfo.location}</p>
                <p className={styles.name}><i className={cx("ti-mobile", styles.icon)}></i>{PHONE}<a className={styles.link}href="tel:0982320221">{contactInfo.phone}</a></p>
                <p className={styles.name}><i className={cx("ti-email", styles.icon)}></i>{EMAIL}<a
                    className={styles.link} href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            </div>
        </div>



    );
}
export default ContactInform;

