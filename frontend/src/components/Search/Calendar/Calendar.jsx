import React, { useState } from "react";
import "./Calendar.css";
import { parseDate } from "@internationalized/date";
import { today, getLocalTimeZone } from "@internationalized/date";

import {
    Button,
    CalendarCell,
    CalendarGrid,
    Heading,
    RangeCalendar,
} from "react-aria-components";

const CalendarComponent = ({ fromToDates, setFromToDates }) => {
    // console.log("fromToDates.start", fromToDates.start.toString());
    // console.log(today(getLocalTimeZone()), "today");
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
                value={fromToDates !== undefined ? fromToDates : null}
                onChange={setFromToDates}
                minValue={today(getLocalTimeZone())}
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
            <div className="add-dates-bar">
                <div>Exact dates</div>
                <div>+-1day</div>
                <div>+-2days</div>
                <div>+-3days</div>
                <div>+-7days</div>
                <div>+-14days</div>
            </div>
        </div>
    );
};

export default CalendarComponent;
