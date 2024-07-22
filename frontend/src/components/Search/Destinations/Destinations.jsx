import React from "react";

const Destinations = () => {
    return (
        <div className="dropdown-wrapper">
            <div className="destination-container">
                <p>Search by region</p>
                <div className="grid-destinations">
                    <div className="grid-item">
                        <div className="grid-img"></div>
                        <div className="grid-text">
                            <p>I’m flexible</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-img"></div>
                        <div className="grid-text">Southeast Asia</div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-img"></div>
                        <div className="grid-text">Spain</div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-img"></div>
                        <div className="grid-text">United States</div>
                    </div>

                    <div className="grid-item">
                        <div className="grid-img"></div>
                        <div className="grid-text">Italy</div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-img"></div>
                        <div className="grid-text">Afrika</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
