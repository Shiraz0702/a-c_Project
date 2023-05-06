import React from 'react';
import logo from "./Components/ac.png";

const HomeSection = () => {
    return (
        <div>
            <section className={"bg-dark text-light p-5 text-center text-sm-center"} id={"home"}>
                <div className={"container py-5"}>
                    <div className={"d-sm-flex align-items-center justify-content-between py-5"}>
                        <div>
                            <h1> Become a web developer</h1>
                            <h3 className={"my-4"}> UI/UX Designer</h3>
                            <p className={"lead my-4"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <button className={"btn btn-primary btn-lg"}>Contact Us</button>
                        </div>
                        <a href={"#"}>
                            <img src={logo} className={"img-fluid"} width={"1000"}/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeSection;