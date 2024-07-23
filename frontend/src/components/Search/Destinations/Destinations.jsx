import React from "react";

const Destinations = ({ destination, setDestination }) => {
    const onclickHandler = (e) => {
        /* const textDestination = e.target.innerText; */
        const textDestination =
            e.currentTarget.querySelector(".grid-text").innerText;
        setDestination(textDestination);
        console.log(destination, "destination");
    };
    const destinations = [
        { image: "/images/searchMaps/world-map.png", text: "I’m flexible" },
        { image: "/images/searchMaps/asia-map.png", text: "Asia" },
        { image: "/images/searchMaps/ukraine-map.png", text: "Ukraine" },
        { image: "/images/searchMaps/usa-map.png", text: "United States" },
        { image: "/images/searchMaps/italy-map.png", text: "Italy" },
        { image: "/images/searchMaps/afrika-map.png", text: "Afrika" },
    ];
    return (
        <div className="dropdown-wrapper">
            <div className="destination-container">
                <p>Search by region</p>
                <div className="grid-destinations">
                    {destinations.map((destination, index) => (
                        <div
                            className="grid-item"
                            key={index}
                            onClick={onclickHandler}
                        >
                            <div className="grid-img">
                                <img
                                    src={destination.image}
                                    alt={destination.text}
                                />
                            </div>
                            <div className="grid-text">{destination.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;
