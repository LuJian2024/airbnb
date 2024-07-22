import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutsideClickHandler(
    calenderWrapper,
    searchWrapper,
    callback
) {
    const handleClick = (e) => {
        if (
            calenderWrapper.current &&
            !calenderWrapper.current.contains(e.target) &&
            searchWrapper.current &&
            !searchWrapper.current.contains(e.target)
        ) {
            callback();
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [calenderWrapper, searchWrapper, callback]);
}
