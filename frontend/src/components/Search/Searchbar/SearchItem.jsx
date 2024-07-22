import React from "react";

const SearchItem = ({
    itemType,
    itemTitle,
    isInput,
    placeholder,
    onClick,
    /* hasButton, */
}) => {
    return (
        <div
            className={
                itemType === "destinations"
                    ? "destinations"
                    : itemType === "guests"
                    ? "guests"
                    : "check-in-container"
            }
            onClick={() => onClick(itemType)}
        >
            <div className="search-content">
                <p className="search-titel">{itemTitle}</p>
                {isInput ? (
                    <input
                        className="search-input"
                        type="text"
                        name="search-destination"
                        id="search-destination"
                        placeholder={placeholder}
                    />
                ) : (
                    <p className="placeholder">{placeholder}</p>
                )}
            </div>
            {/* {hasButton && (
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            )} */}
        </div>
    );
};

export default SearchItem;
