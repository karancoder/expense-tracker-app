import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeSelector = ({ setSelectedDateRange }) => {
    // date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        },
    ]);

    useEffect(() => {
        setSelectedDateRange(range[0]);
    }, [range]);

    // open close
    const [open, setOpen] = useState(false);

    // get the target element to toggle
    const refOne = useRef(null);

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, []);

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        // console.log(e.key)
        if (e.key === "Escape") {
            setOpen(false);
        }
    };

    // Hide dropdown on outside click
    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false);
        }
    };
    return (
        <div className="flex-none">
            <span className="text-md font-semibold p-2">Pick Date Range </span>
            <input
                value={`${format(range[0].startDate, "dd-MM-yyyy")} to ${format(
                    range[0].endDate,
                    "dd-MM-yyyy"
                )}`}
                readOnly
                className="inputBox p-2 mr-2 border-2 border-slate-400 rounded-sm w-max"
                size="24"
                onClick={() => setOpen((prev_open) => !prev_open)}
            />{" "}
            <div ref={refOne}>
                {open && (
                    <DateRangePicker
                        onChange={(item) => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={2}
                        direction="horizontal"
                        className="calendarElement"
                    />
                )}
            </div>
        </div>
    );
};

export default DateRangeSelector;
