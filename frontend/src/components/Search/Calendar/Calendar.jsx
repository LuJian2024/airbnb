import React, { useState } from "react";
import "./Calendar.css";
import { parseDate } from "@internationalized/date";

import {
    Button,
    CalendarCell,
    CalendarGrid,
    Heading,
    RangeCalendar,
} from "react-aria-components";

const CalendarComponent = () => {
    const [fromToDates, setFromToDates] = useState({
        start: parseDate("2024-07-19"),
        end: parseDate("2024-07-20"),
    });

    console.log("fromToDates", fromToDates);
    return (
        <div className="search-dropdown-container-calendar">
            <div className="date-chose-calendar-bar">
                <div>Dates</div>
                <div>Months</div>
                <div>Flexible</div>
            </div>
            <RangeCalendar
                className="react-aria-RangeCalendar"
                aria-label="Trip dates"
                visibleDuration={{ months: 2 }}
                pageBehavior="single"
                value={fromToDates}
                onChange={setFromToDates}
            >
                <header>
                    <Button slot="previous" className="react-aria-Button">
                        ◀
                    </Button>
                    <Heading className="react-aria-Heading" />
                    <Button slot="next" className="react-aria-Button">
                        ▶
                    </Button>
                </header>
                <div style={{ display: "flex", gap: 30, overflow: "auto" }}>
                    <CalendarGrid>
                        {(date) => (
                            <CalendarCell
                                date={date}
                                className="react-aria-CalendarCell"
                            />
                        )}
                    </CalendarGrid>
                    <CalendarGrid offset={{ months: 1 }}>
                        {(date) => (
                            <CalendarCell
                                date={date}
                                className="react-aria-CalendarCell"
                            />
                        )}
                    </CalendarGrid>
                </div>
            </RangeCalendar>
        </div>
    );
};

export default CalendarComponent;
