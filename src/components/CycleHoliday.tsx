import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    /* What are your five favorite holidays? List them here:
     *     Christmas 🎄
     *     Thanksgiving 🦃
     *     New Years 🍾
     *     Easter 🐇
     *     Halloween 🎃
     * Find five emojis that represent the holidays: (DONE)
     *     You will need one state, either a string or an enumeration
     * of 5 strings (like QuestionType) (perhaps named "Holiday")
     *     You will need to define two functions (or two "Records")
     * that can take in an existing holiday and produce the next holiday
     * - one function should produce the next holiday alphabetically,
     * and the other produces the next holiday in the year.
     *     The view should render the current holiday like this:
     * "Holiday: 🎃"
     *     Create two buttons that let you "cycle" through each holiday:
     *         First button should include the text "Alphabet" somewhere
     * (e.g., Advance by Alphabet) and changes the current holiday
     * to the next one alphabetically
     *         Second button should include the text "Year" somewhere
     * (e.g. Advance by Year) and changes the current holiday to
     * the next one in the year.
     */
    type Holiday =
        | "Holiday: 🎄"
        | "Holiday: 🦃"
        | "Holiday: 🍾"
        | "Holiday: 🐇"
        | "Holiday: 🎃";
    const [currentHoliday, changeHoliday] = useState<Holiday>("Holiday: 🎄");

    const cycleByAlphabet: Record<Holiday, Holiday> = {
        "Holiday: 🎄": "Holiday: 🐇",
        "Holiday: 🐇": "Holiday: 🎃",
        "Holiday: 🎃": "Holiday: 🍾",
        "Holiday: 🍾": "Holiday: 🦃",
        "Holiday: 🦃": "Holiday: 🎄"
    };

    const cycleThroughYear: Record<Holiday, Holiday> = {
        "Holiday: 🍾": "Holiday: 🐇",
        "Holiday: 🐇": "Holiday: 🎃",
        "Holiday: 🎃": "Holiday: 🦃",
        "Holiday: 🦃": "Holiday: 🎄",
        "Holiday: 🎄": "Holiday: 🍾"
    };

    return (
        <div>
            <div>
                <Button
                    onClick={() =>
                        changeHoliday(cycleByAlphabet[currentHoliday])
                    }
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() =>
                        changeHoliday(cycleThroughYear[currentHoliday])
                    }
                >
                    Advance by Year
                </Button>
            </div>
            <div>
                <span>{currentHoliday}</span>
            </div>
        </div>
    );
}
