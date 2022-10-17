import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    /* Allows a user to enter an answer to a short answer question, and then
     * displays whether they got it correct or incorrect. The component takes in
     * a parameter representing the expectedAnswer.
     *     You will need a state to handle the user's given answer
     *     The user's given answer should initially be the empty string
     *     When the user's given answer matchs the expectedAnswer, display ✔️;
     * otherwise display ❌.
     */

    //We need a textbox
    //Answer is originally incorrect (React reads empty string, not the correct answer)
    //Entering in "expectedAnswer" signals "correct" ✔️
    //Entering in anything but the "expectedAnswer" signals incorrect ❌.

    //This is the State (Model)
    const [userAnswer, setUserAnswer] = useState<string>("");

    //This is the Controller
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }
    //This is the View
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="givenAnswer">
                <Form.Label>Check Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            <div>
                Correct Answer? {userAnswer === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
