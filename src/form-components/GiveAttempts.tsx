import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    /* Simulates a user taking a quiz with a limited number of attempts, but also
     * provides a way for them to gain as many attempts as they want via a numeric input box.
     *     You will need a state to represent the number of attempts the user has left,
     * and another state to represent the number of attempts they are requesting
     *     The initial number of attempts should be 3.
     *     The number of attempts left should be visible.
     *     There should be a numeric input box where the user can specify
     * their requested number of attempts.
     *     There should be two buttons, one labeled "use" that decreases the attempts by one
     * and one labeled "gain" that increases the attempts by the amount in the input box.
     *     If the user attempts to request an invalid amount (e.g., the empty string "")
     * that cannot be parsed as an integer, then do not change their number of attempts.
     *     When the user is out of attempts, the "use" button should be disabled.
     */
    // THESE ARE THE STATES (Models) (plural?)
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    // A rational user will put in a positive number of attempts, so any invalid amount (that can't be parsed)
    // will be set to -1, which will be evaluated in the controller to determine whether the number of attempts should be changed.
    const validRequestedAttempts = parseInt(requestedAttempts) || -1;
    // THESE ARE THE CONTROLLERS
    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setRequestedAttempts(event.target.value);
    }
    function gainAttempts(additionalAttempts: number) {
        if (additionalAttempts > 0) {
            setAttemptsLeft(attemptsLeft + additionalAttempts);
        }
    }
    // THIS IS THE VIEW
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="requestedNumberOfAttempts">
                <Form.Label>How many attempts would you like?</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequestedAttempts}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft < 1}
            >
                Use
            </Button>
            <Button onClick={() => gainAttempts(validRequestedAttempts)}>
                Gain
            </Button>
            <div>Number of attempts left: {attemptsLeft}</div>
        </div>
    );
}
