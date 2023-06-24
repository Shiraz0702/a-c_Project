import React from 'react';
import styles from "./Home.module.css";

import ServiceRegistration from "./serviceRegistration/ServiceRegistration";
import LogoCarousel from "./logoCarousel/LogoCarousel";
import CardWIthImage from "./services/CardWIthImage";
import ContactUs from "./contactUs/ContactUs";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import ContactInfo from "../contactInfo/ContactInfo";
import FindUsOn from "./findUsOn/FindUsOn";

const Home = () => {
    return (
        <div className={styles.main_layout}>
            <h1 className={"h1 text-center  text-light m-5"} style={{fontSize: "60px", paddingTop: "200px"}}> Heating
                and Cooling service <br/> in Los Angeles</h1>
            <CardWIthImage/>
            <LogoCarousel/>
            <WhyChooseUs/>
            <h1 className={"h1 text-center bg"}>We proudly install, repair, and service the following brands:</h1>
            <FindUsOn/>
            <ContactInfo/>
        </div>
    );
};

export default Home;