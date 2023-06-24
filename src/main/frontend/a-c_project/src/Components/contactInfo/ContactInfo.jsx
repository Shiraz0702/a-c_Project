import React from 'react';
import logo from '../ac.png'

const ContactInfo = () => {
    return (
        <div className={"container-fluid bg-dark p-4 mt-4"}>
            <div className={"row"}>
                <div className={"col-4"}>
                    <img src={logo} className={"m-4" } style={{height:"200px", width:"230px"}}/>
                </div>
                <div className={"col-4 d-grid"}>
                    <h5 className={"h5 text-light"}>Contact</h5>
                    <i className="bi bi-clock-fill fs-5 text-light"> Mon - Fri: 8.00am 6.00pm</i>
                    <i className="bi bi-geo-alt-fill fs-5 text-light"> 404 W Dryden, Glendale, CA 91202</i>
                    <i className="bi bi-telephone-fill fs-5 text-light"> (888) 952 7964</i>
                    <i className="bi bi-envelope-fill fs-5 text-light"> info@airecola.com</i>

                </div>
                <div className={"col-4"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.4299973803545!2d-118.2644534240841!3d34.160922311983576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c1b9dc27db83%3A0xb191ca982a441221!2sJoel&#39;s%20Pool%20Hall!5e0!3m2!1sen!2sus!4v1686937110454!5m2!1sen!2sus"
                        style={{width: "370px", height: "250px"}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    );
};

export default ContactInfo;