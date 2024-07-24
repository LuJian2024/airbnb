import React from "react";
import "./Searchbar.css";
import SearchItem from "./SearchItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({
    onSearchItemClick,
    allGuestsCount,
    destination,
    fromToDates,
    onSearchButtonClick,
}) => {
    const hasGuests = Object.values(allGuestsCount).some((count) => count > 0);
    const placeholderGuests = hasGuests
        ? `${Object.entries(allGuestsCount)
              .filter(([key, value]) => value > 0)
              .map(([key, value]) => `${key}: ${value}`)
              .join(", ")}`
        : "Add guests";
    const placeholderDestinations = destination
        ? destination
        : "Search destination";
    const placeholderCheckInDate = fromToDates?.start
        ? fromToDates.start.toString()
        : "Add dates";
    const placeholderCheckOutDate = fromToDates?.end
        ? fromToDates.end.toString()
        : "Add dates";
    return (
        <div className="search-container">
            <SearchItem
                itemType="destinations"
                itemTitle="Where"
                isInput={true}
                placeholder={placeholderDestinations}
                onClick={onSearchItemClick}
            />
            <SearchItem
                itemType="date"
                itemTitle="Check in"
                placeholder={placeholderCheckInDate}
                onClick={onSearchItemClick}
            />
            <SearchItem
                itemType="date"
                itemTitle="Check out"
                placeholder={placeholderCheckOutDate}
                onClick={onSearchItemClick}
            />
            <SearchItem
                itemType="guests"
                itemTitle="Who"
                placeholder={placeholderGuests}
                hasButton={true}
                onClick={onSearchItemClick}
            />
            <div>
                <button className="search-button" onClick={onSearchButtonClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    );
};

export default Searchbar;
