import React, {Component} from 'react';
import ContactContent from './ContactContent/ContactContent';
import ContactForm from './ContactForm/ContactForm';
import ContactInform from './ContactInform/ContactInform';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...ContactInfo,
        }
    }

    render() {
        const {heading, subHeading, information = []} = this.state;
        return (
            <div id="contact" className="content-sections">
                <ContactContent contactHeading={heading} contactSubHeading={subHeading}/>
                <ContactInform contactInfo={information} />
                <ContactForm />             
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