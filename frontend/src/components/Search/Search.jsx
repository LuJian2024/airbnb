import { useState, useRef, useEffect } from "react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import Searchbar from "./Searchbar/Searchbar";
import CalendarComponent from "./Calendar/Calendar";
import useOutsideClickHandler from "./useOutsideClickHandler";
import Destinations from "./Destinations/Destinations";
import Guests from "./Guests/Guests";
/*  */
function Search() {
    const [dropdownCalendarVisible, setDropdownCalendarVisible] =
        useState(false);
    const [dropdownDestinationsVisible, setDropdownDestinationsVisible] =
        useState(false);
    const [dropdownGuestsVisible, setDropdownGuestsVisible] = useState(false);
    const calenderWrapper = useRef(null);
    const searchWrapper = useRef(null);
    const [allGuestsCount, setAllGuestsCount] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    });
    const [destination, setDestination] = useState("");
    const [fromToDates, setFromToDates] = useState();

    let navigate = useNavigate();

    const handleOutsideClick = () => {
        console.log("dropdownCalendarVisibleRef", dropdownCalendarVisible);
        if (dropdownCalendarVisible) {
            setDropdownCalendarVisible(false);
        }
        if (dropdownDestinationsVisible) {
            setDropdownDestinationsVisible(false);
        }
        if (dropdownGuestsVisible) {
            setDropdownGuestsVisible(false);
        }
    };
    const onSearchButtonClick = () => {
        navigate("/catalog/1/0");
        setDestination("");
        setFromToDates();
        setAllGuestsCount({
            adults: 0,
            children: 0,
            infants: 0,
            pets: 0,
        });
        setDropdownGuestsVisible(false);
    };

    useEffect(() => {
        console.log("dropdownCalendarVisible111", dropdownCalendarVisible);
    });

    useOutsideClickHandler(calenderWrapper, searchWrapper, handleOutsideClick);

    const handleSearchItemClick = (itemType) => {
        /* console.log("dropdownCalendarVisible", dropdownCalendarVisible); */
        if (itemType === "date") {
            setDropdownCalendarVisible(!dropdownCalendarVisible);
            setDropdownDestinationsVisible(false);
            setDropdownGuestsVisible(false);
        }
        if (itemType === "destinations") {
            setDropdownDestinationsVisible(!dropdownDestinationsVisible);
            setDropdownCalendarVisible(false);
            setDropdownGuestsVisible(false);
        }
        if (itemType === "guests") {
            setDropdownGuestsVisible(!dropdownGuestsVisible);
            setDropdownCalendarVisible(false);
            setDropdownDestinationsVisible(false);
        }
    };

    return (
        <div
            style={{
                position: "relative",
                margin: "0 auto",
                width: "848px",
            }}
        >
            <div ref={searchWrapper}>
                <Searchbar
                    onSearchItemClick={handleSearchItemClick}
                    allGuestsCount={allGuestsCount}
                    destination={destination}
                    fromToDates={fromToDates}
                    onSearchButtonClick={onSearchButtonClick}
                />
            </div>
            <div ref={calenderWrapper} id="wrapper-ref">
                {dropdownCalendarVisible && (
                    <CalendarComponent
                        fromToDates={fromToDates}
                        setFromToDates={setFromToDates}
                    />
                )}
                {dropdownDestinationsVisible && (
                    <Destinations
                        destination={destination}
                        setDestination={setDestination}
                        setDropdownDestinationsVisible={
                            setDropdownDestinationsVisible
                        }
                        setDropdownCalendarVisible={setDropdownCalendarVisible}
                    />
                )}
                {dropdownGuestsVisible && (
                    <Guests
                        allGuestsCount={allGuestsCount}
                        setAllGuestsCount={setAllGuestsCount}
                    />
                )}
            </div>
        </div>
    );
}

export default Search;
