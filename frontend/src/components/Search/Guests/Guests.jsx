import React, { useState } from "react";
import "./Guests.css";
import GuestTyp from "./GuestTyp";

const Guests = ({ allGuestsCount, setAllGuestsCount }) => {
    return (
        <div className="dropdown-wrapper">
            <div className="guests-container">
                <div className="guests-dropdown-content">
                    <GuestTyp
                        type="adults"
                        age="Ages 13 or above"
                        allGuestsCount={allGuestsCount}
                        setAllGuestsCount={setAllGuestsCount}
                    />
                    <GuestTyp
                        type="children"
                        age="Ages 2-12"
                        allGuestsCount={allGuestsCount}
                        setAllGuestsCount={setAllGuestsCount}
                    />
                    <GuestTyp
                        type="infants"
                        age="Under 2"
                        allGuestsCount={allGuestsCount}
                        setAllGuestsCount={setAllGuestsCount}
                    />
                    <GuestTyp
                        type="pets"
                        age={<a href="#">Bring a service animal?</a>}
                        allGuestsCount={allGuestsCount}
                        setAllGuestsCount={setAllGuestsCount}
                    />
                </div>
            </div>
        </div>
    );
};

export default Guests;
