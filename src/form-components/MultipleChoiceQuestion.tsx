import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    /* Allows a user to select an answer from a list in a dropdown,
     * and then displays whether they got it correct or incorrect.
     * The component takes in a parameter representing the "expectedAnswer"
     * and also a parameter representing the list of "options".
     *     You will need a state to represent the user's currently selected choice.
     *     The initial state of the selected choice is the first element of the "options" list.
     *     When the user's given answer matches the "expectedAnswer", display ✔️;
     * otherwise, display ❌.
     */

    // THIS IS THE STATE (MODEL)
    const [currentChoice, setCurrentChoice] = useState<string>(options[0]);
    // THIS IS THE CONTROLLER
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentChoice(event.target.value);
    }
    // THIS IS THE VIEW
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiple-choice-options">
                <Form.Label>Select one of the following:</Form.Label>
                <Form.Select value={currentChoice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                Correct Answer? {currentChoice === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
