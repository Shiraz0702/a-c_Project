import React from 'react';
import AmericanStandardLogo from "./logos/american-standard.png"
import BryantLogo from "./logos/bryant.png"
import CarrierLogo from "./logos/Carrier.png"
import DankinLogo from "./logos/daikin.png"
import HeilLogo from "./logos/heil.png"
import LennoxLogo from "./logos/lennox.png"
import RheemLogo from "./logos/Rheem.png"
import RuudLogo from "./logos/ruud.png"
import TraneLogo from "./logos/trane.png"
import "./LogoCarousel.css"

const LogoCarousel = () => {
    return (
        <div className={"logos-container"}>
        <div className={"logos"}>
            <div className={"logos-slide"}>
                <img src={BryantLogo}/>
                <img src={CarrierLogo}/>
                <img src={DankinLogo}/>
                <img src={HeilLogo}/>
                <img src={LennoxLogo}/>
                <img src={RheemLogo}/>
                <img src={RuudLogo}/>
                <img src={TraneLogo}/>
                <img src={AmericanStandardLogo}/>
            </div>
            <div className={"logos-slide"}>
                <img src={BryantLogo}/>
                <img src={CarrierLogo}/>
                <img src={DankinLogo}/>
                <img src={HeilLogo}/>
                <img src={LennoxLogo}/>
                <img src={RheemLogo}/>
                <img src={RuudLogo}/>
                <img src={TraneLogo}/>
                <img src={AmericanStandardLogo}/>
            </div>
        </div>
        </div>
    );
};

export default LogoCarousel;