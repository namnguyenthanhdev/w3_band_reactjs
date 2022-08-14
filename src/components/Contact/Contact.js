import React, {Component} from 'react';
import ContactContent from './ContactContent/ContactContent';
import ContactInform from './ContactInform/ContactInform';

import styles from './Contact.module.scss';
import cx from 'classnames';
import ContactFormByHook from "./ContactForm/ContactFormByHook";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...ContactInfo,
        }
    }

    render() {
        const {heading, subHeading, information = []} = this.state;
        const {className} = this.props;
        return (
            <div id="contact" className={cx(styles.background, className)}>
                <div className={cx(styles.container, className)}>
                    <ContactContent contactHeading={heading} contactSubHeading={subHeading} className={styles.containerHeader}/>
                    <div className={styles.containerBody}>
                        <ContactInform contactInfo={information} className={styles.containerInfo}/>
                        <ContactFormByHook className={styles.containerForm}/>
                    </div>

                </div>
            </div>
        );
    }
}

const ContactInfo = {
    heading: 'CONTACT',
    subHeading: 'Fan? Drop a note!',
    information: {
        location: 'Chicago, US',
        phone: '0982320221',
        email: 'thanhnam21122012@gmail.com',
    }  
}

export default Contact;