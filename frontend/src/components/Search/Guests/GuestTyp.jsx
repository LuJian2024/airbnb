import React, { useState } from "react";

const GuestTyp = ({ type, age, setAllGuestsCount }) => {
    const [guestsCount, setGuestsCount] = useState(0);
    const guestAddHandler = () => {
        setGuestsCount(guestsCount + 1);
        setAllGuestsCount((prevState) => ({
            ...prevState,
            [type.toLowerCase()]: guestsCount + 1,
        }));
        console.log(guestsCount, "guestsCount");
    };
    const guestSubstractHandler = () => {
        if (guestsCount > 0) {
            setGuestsCount(guestsCount - 1);
            setAllGuestsCount((prevState) => ({
                ...prevState,
                [type.toLowerCase()]: guestsCount - 1,
            }));
            console.log(guestsCount, "guestsCount");
        }
    };
    return (
        <div className="search-guest-typ">
            <div className="search-guest-typ-p">
                <p>{type}</p>
                <p>{age}</p>
            </div>
            <div className="search-guest-add-substract">
                <button
                    disabled={guestsCount <= 0}
                    style={{
                        borderColor: guestsCount > 0 ? "black" : "lightgray",
                    }}
                    onClick={guestSubstractHandler}
                >
                    -
                </button>
                <p>{guestsCount}</p>
                <button onClick={guestAddHandler}>+</button>
            </div>
        </div>
    );
};

export default GuestTyp;
