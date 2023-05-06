import React from 'react';

const ServicesSection = () => {
    return (
        <div>
            <section className={"bg-primary text-light p-5"} id={"services"}>
                <div className={"container py-5"}>
                    <div className={"d-md-flex justify-content-between align-items-center"}>
                        <h3 className={"mb-3"}>
                            Sign up for Newsletter
                        </h3>
                        <div className={"input-group news-inout"}>
                            <input type={"text"} className={"form-control"} placeholder={"enter email"} name={""}/>
                            <button className={"btn btn-dark btn-lg"}>Discover</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesSection;