import React from 'react';
import homeAdvisor from "./home-advisor.png"
import houzz from "./houzz.webp"
import buildZoom from "./buildzoom.webp"
import yelp from "./yelp.webp"
import angi from "./angi.webp"
import bbb from "./bbb.webp"
import google from "./google.png"

const FindUsOn = () => {
    return (
        <div className={"container text-center"}>
            <h3 className={"h3"}>Find us on</h3>
            <div className={""}>
                <img className={"m-2"} src={google}/>
                <img className={"m-2"} src={homeAdvisor}/>
                <img className={"m-2"} src={buildZoom}/>
                <img className={"m-2"} src={houzz}/>
                <img className={"m-2"} src={yelp}/>
                <img className={"m-2"} src={angi}/>
                <img className={"m-2"} src={bbb}/>
            </div>
        </div>
    );
};

export default FindUsOn;