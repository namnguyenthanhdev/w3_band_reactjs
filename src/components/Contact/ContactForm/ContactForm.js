import React from 'react';

const ContactForm = (props) => {
    const {} = props;
    return (
        <div className="col col-half s-col-full contact-form">
            <form action="" className="action">
                <div className="row">
                    <div className="col col-half s-col-full">
                        <input type="text" name="" required className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col col-half s-col-full s-mt-8">
                        <input type="email" name="" required className="form-control" placeholder="Email"/>
                    </div>
                </div>
                <div className="row mt-8">
                    <div className="col col-full">
                        <input type="text" name="" required className="form-control" placeholder="Message"/>
                    </div>
                </div>

                <input className="mt-16 pull-right btn s-full-width" type="submit" value="SEND"/>
            </form>
        </div>
    );
}
export default ContactForm;