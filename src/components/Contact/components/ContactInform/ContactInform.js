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
            <div >
                <p><i className="ti-location-pin"></i>{contactInfo.location}</p>
                <p><i className="ti-mobile"></i>{PHONE}<a href="tel:0982320221">{contactInfo.phone}</a></p>
                <p><i className="ti-email"></i>{EMAIL}<a
                        href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            </div>
        </div>



    );
}
export default ContactInform;

