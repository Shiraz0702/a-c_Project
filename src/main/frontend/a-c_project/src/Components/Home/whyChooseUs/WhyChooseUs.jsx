import React from 'react';
import installation_image from "../installation.jpg";

const WhyChooseUs = () => {
    return (
        // <div className={"row bg-primary"}>
        //     <div className="row p-5">
        //         <div className="col-7">
        //             <h5 className={"h5 text-light"}>Why Choose Us?</h5>
        //             <h1 className={"h1 text-light"}>We Do Things The Right Way, Not The Easy Way.®</h1>
        //             <div className="row pt-4">
        //                 <div className="col-6 d-inline-flex ">
        //                     <i className="bi bi-check-circle-fill fs-5 text-light"> SAME-DAY INSTALLATION</i>
        //                 </div>
        //                 <div className="col-6 pb-3">
        //                     <i className="bi bi-check-circle-fill fs-5 text-light"> 10 YEAR PARTS & LABOR WARRANTY</i>
        //
        //                 </div>
        //
        //                 <div className="col-6 pb-3">
        //                     <i className="bi bi-check-circle-fill fs-5 text-light"> FINANCING OPTIONS</i>
        //
        //                 </div>
        //                 <div className="col-6 pb-3">
        //                     <i className="bi bi-check-circle-fill fs-5 text-light"> FULLY STOCKED TRUCKS</i>
        //
        //                 </div>
        //                 <div className="col-6 pb-3">
        //                     <i className="bi bi-check-circle-fill fs-5 text-light"> AVAILABLE 24/7</i>
        //
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-5 text-center">
        //             <img src={installation_image} className={"img-fluid"} style={{height: "500px", width: "500px"}}/>
        //         </div>
        //     </div>
        // </div>
            <div className="card mb-3 bg-dark mt-5">
                <div className={"container"}>
                <h3 className={"h3 text-light text-center p-4"}>ECO Heating and Cooling has been providing HVAC services
                    to the Greater Los Angeles area and we’ve
                    helped thousands of home and business owners with HVAC repair, installation, and maintenance. We’re
                    proud to provide heating and cooling products from some of the biggest names in the industry, and
                    all
                    come with outstanding warranty protection. Of course, we also stand behind all of our workmanship
                    100%,
                    so if you ever feel dissatisfied with any part of our service, our people, or our products, we’ll
                    work
                    one-on-one with you to make things right.</h3>
                <div className="row g-0">
                    <div className="col-md-7">
                        <div className="card-body p-4">
                            <h5 className={"h5 text-light text-center"}>Why Choose Us?</h5>
                            <h1 className={"h1 text-light"}>We Do Things The Right Way, Not The Easy Way.®</h1>
                            <div className="row pt-4">
                                <div className="col-6 d-inline-flex ">
                                    <i className="bi bi-check-circle-fill fs-5 text-light"> SAME-DAY INSTALLATION</i>
                                </div>
                                <div className="col-6 pb-3">
                                    <i className="bi bi-check-circle-fill fs-5 text-light"> 10 YEAR PARTS & LABOR
                                        WARRANTY</i>

                                </div>

                                <div className="col-6 pb-3">
                                    <i className="bi bi-check-circle-fill fs-5 text-light"> FINANCING OPTIONS</i>

                                </div>
                                <div className="col-6 pb-3">
                                    <i className="bi bi-check-circle-fill fs-5 text-light"> FULLY STOCKED TRUCKS</i>

                                </div>
                                <div className="col-6 pb-3">
                                    <i className="bi bi-check-circle-fill fs-5 text-light"> AVAILABLE 24/7</i>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-5 p-4">
                        <img src={installation_image} className="card-img rounded-start" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;