import React from 'react';
import '../../../assets/fonts/themify-icons/themify-icons.css';

const PHONE = 'Phone: ';
const EMAIL = 'Email: ';

const ContactInform = (props) => {
    const {...information} = props;
    const {
        location: place,
        phone: numberContact,
        email: mail,
    } = information;
    
    return (
        <div className="row contact-content">
            <div className="col col-half s-col-full contact-info">
                <p><i className="ti-location-pin"></i>{place}</p>
                <p><i className="ti-mobile"></i>{PHONE}<a href="tel:0982320221">{numberContact}</a></p>
                <p><i className="ti-email"></i>{EMAIL}<a
                        href={`mailto:${mail}`}>{mail}</a></p>
            </div> 
        </div>
    );
}
export default ContactInform;

