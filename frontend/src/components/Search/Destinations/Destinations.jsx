import React from "react";

const destinations = [
    { image: "/images/searchMaps/world-map.png", text: "I’m flexible" },
    { image: "/images/searchMaps/asia-map.png", text: "Asia" },
    { image: "/images/searchMaps/ukraine-map.png", text: "Ukraine" },
    { image: "/images/searchMaps/usa-map.png", text: "United States" },
    { image: "/images/searchMaps/norway-map.png", text: "Norway" },
    { image: "/images/searchMaps/afrika-map.png", text: "Afrika" },
];

const Destinations = ({
    destination,
    setDestination,
    setDropdownDestinationsVisible,
    setDropdownCalendarVisible,
}) => {
    const onclickHandler = (e) => {
        const textDestination =
            e.currentTarget.querySelector(".grid-text").innerText;
        setDestination(textDestination);
        setDropdownDestinationsVisible(false);
        setDropdownCalendarVisible(true);
    };

    return (
        <div className="dropdown-wrapper">
            <div className="destination-container">
                <p>Search by region</p>
                <div className="grid-destinations">
                    {destinations.map((dest, index) => (
                        <div
                            className={
                                destination === dest.text
                                    ? "grid-item grid-item-selected"
                                    : "grid-item"
                            }
                            key={index}
                            onClick={onclickHandler}
                        >
                            <div className="grid-img">
                                <img src={dest.image} alt={dest.text} />
                            </div>
                            <div className="grid-text">{dest.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;
