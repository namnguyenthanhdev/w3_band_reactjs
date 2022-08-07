import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="content-sections">
                <h2 className="section-heading">CONTACT</h2>
                <p className="section-sub-heading">Fan? Drop a note!</p>

                <div className="row contact-content">
                    <div className="col col-half s-col-full contact-info">
                        <p><i className="ti-location-pin"></i>Chicago, US</p>
                        <p><i className="ti-mobile"></i>Phone: <a href="tel:0982320221">0982320221</a></p>
                        <p><i className="ti-email"></i>Email: <a
                                href="mailto:thanhnam21122012@gmail.com">thanhnam21122012@gmail.com</a></p>
                    </div>
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
                </div>
            </div>
    );
}

export default Contact;