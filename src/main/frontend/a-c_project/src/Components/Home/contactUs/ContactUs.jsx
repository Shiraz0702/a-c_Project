import React from 'react';
import ServiceRegistration from "../serviceRegistration/ServiceRegistration";
import "./ContactUs.css"
import ContactInfo from "../../contactInfo/ContactInfo";

const ContactUs = () => {
    return (
        <div className={"pt-5"}>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <h1 className={"h1 text-center mt-4 mb-4"}>How to Contact us</h1>
                    <h4 className={"h4 text-center mb-4"}>If you’ve got questions or ideas you would like to share, send a
                        message.</h4>
                    <div className={"info_box"}>
                        <div className={"icon_container"}>
                            <i className="bi bi-geo-alt " style={{fontSize: "40px"}}></i>
                        </div>
                        <h5 className={"h5 mb-0 p-2"}>Our Location <br/> 8374 Topanga Canyon Blvd Canoga Park CA
                            91304</h5>
                    </div>
                    <div className={"info_box"}>
                        <div className={"icon_container"}>
                            <i className="bi bi-telephone-fill" style={{fontSize: "40px"}}></i>
                        </div>
                        <h5 className={"h5 mb-0 p-2"}>Phone Number <br/>(888) 952 7964</h5>
                    </div>
                    <div className={"info_box"}>
                        <div className={"icon_container"}>
                            <i className="bi bi-envelope-fill" style={{fontSize: "40px"}}></i>
                        </div>
                        <h5 className={"h5 mb-0 p-2"}>Our Email <br/>info@airecola.com</h5>
                    </div>
                </div>
                <div className={"col"}>
                    <ServiceRegistration/>
                </div>
            </div>
        </div>
        <ContactInfo/>
</div>
    );
};

export default ContactUs;