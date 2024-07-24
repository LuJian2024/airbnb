import React, { useState } from "react";

const GuestTyp = ({ type, age, allGuestsCount, setAllGuestsCount }) => {
    const label = type[0].toUpperCase() + type.slice(1);
    /* const [guestsCount, setGuestsCount] = useState(0); */
    const guestAddHandler = () => {
        /* setGuestsCount(guestsCount + 1); */
        setAllGuestsCount(() => ({
            ...allGuestsCount,
            [type]: allGuestsCount[type] + 1,
        }));
        /* console.log(guestsCount, "guestsCount"); */
    };
    const guestSubstractHandler = () => {
        if (allGuestsCount[type] > 0) {
            /* setGuestsCount(guestsCount - 1); */
            setAllGuestsCount(() => ({
                ...allGuestsCount,
                [type]: allGuestsCount[type] - 1,
            }));
            /* console.log(guestsCount, "guestsCount"); */
        }
    };
    return (
        <div className="search-guest-typ">
            <div className="search-guest-typ-p">
                <p>{label}</p>
                <p>{age}</p>
            </div>
            <div className="search-guest-add-substract">
                <button
                    disabled={allGuestsCount[type] <= 0}
                    style={{
                        borderColor:
                            allGuestsCount[type] > 0 ? "black" : "lightgray",
                    }}
                    onClick={guestSubstractHandler}
                >
                    -
                </button>
                <p>{allGuestsCount[type]}</p>
                <button onClick={guestAddHandler}>+</button>
            </div>
        </div>
    );
};

export default GuestTyp;
