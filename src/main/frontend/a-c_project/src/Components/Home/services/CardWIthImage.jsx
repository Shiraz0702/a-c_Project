import React from 'react';
import repair_image from "../repair.jpg";
import installation_image from "../installation.jpg";
import air_quality_image from "../quality.jpg";
import furnace_image from "../furnace.jpg";
import boiler_image from "../boiler.jpg";
import insulation_image from "../insulation.jpg";

const CardWIthImage = () => {
    return (
            <div className={"container mt-5"}>
                <div className="row row-cols-1 row-cols-md-3 g-5 p-5">
                    <div className="col">
                        <div className="card">
                            <img src={repair_image} className="card-img-top" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title">AIR CONDITIONING REPAIR </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={installation_image} className="card-img-top" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title">AIR CONDITIONING INSTALLATION</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={air_quality_image} className="card-img-top" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title">INDOOR AIR QUALITY</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={furnace_image} className="card-img-top" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title">FURNACE INSTALLATION</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={boiler_image} className="card-img-top" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title">FURANANCE/BOILER REPAIR</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={insulation_image} className="card-img-top" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title">INSULATION</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CardWIthImage;