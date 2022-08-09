import React from 'react';

const ContactContent = (props) => {
    const {contactHeading, contactSubHeading} = props;
    return (
        <div>
            <h2 className="section-heading">{contactHeading}</h2>
            <p className="section-sub-heading">{contactSubHeading}</p>
        </div>
    );
}

export default ContactContent;