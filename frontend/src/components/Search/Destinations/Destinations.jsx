import React from "react";

const Destinations = () => {
    return (
        <div className="dropdown-wrapper">
            <div className="destination-container">
                <p>Search by region</p>
                <div className="grid-destinations">
                    <div className="grid-item">
                        <div className="grid-img">
                            <img
                                src="/images/searchMaps/world-map.png"
                                alt="map"
                            />
                        </div>
                        <div className="grid-text">
                            <p>I’m flexible</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-img">
                            <img
                                src="/images/searchMaps/asia-map.png"
                                alt="map"
                            />
                        </div>
                        <div className="grid-text">Asia</div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-img">
                            <img
                                src="/images/searchMaps/ukraine-map.png"
                                alt="map"
                            />
                        </div>
                        <div className="grid-text">Ukraine</div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-img">
                            <img
                                src="/images/searchMaps/usa-map.png"
                                alt="map"
                            />
                        </div>
                        <div className="grid-text">United States</div>
                    </div>

                    <div className="grid-item">
                        <div className="grid-img">
                            <img
                                src="/images/searchMaps/italy-map.png"
                                alt="map"
                            />
                        </div>
                        <div className="grid-text">Italy</div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-img">
                            <img
                                src="/images/searchMaps/afrika-map.png"
                                alt="map"
                            />
                        </div>
                        <div className="grid-text">Afrika</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
