import React from "react";
import "./Searchbar.css";
import SearchItem from "./SearchItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ onSearchItemClick }) => {
    return (
        <div className="search-container">
            <SearchItem
                itemType="destinations"
                itemTitle="Where"
                isInput={true}
                placeholder="Search destination"
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
                placeholder="Add guests"
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

export default Search;
