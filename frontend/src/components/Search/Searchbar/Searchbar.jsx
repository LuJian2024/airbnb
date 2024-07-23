import React from "react";
import "./Searchbar.css";
import SearchItem from "./SearchItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ onSearchItemClick, allGuestsCount, destination }) => {
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
                placeholder="Add dates"
                onClick={onSearchItemClick}
            />
            <SearchItem
                itemType="date"
                itemTitle="Check out"
                placeholder="Add dates"
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
                <button className="search-button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    );
};

export default Searchbar;
