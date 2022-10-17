import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    /* Has two states controlled by a switch:
     *     The default state shows text indicating the user's name and whether they are a student
     *     The alternate state is an editable form for editing the user's name and whether they are a student.
     * REQUIREMENTS:
     *     You will need state to handle the component being in "edit mode",
     * the user's name, and whether or not the user is a student.
     *     The state of "edit mode" should be controlled by a switch (not a button or checkbox)
     *     Initially, the component is NOT in edit mode,
     * the user's name is literally the string "Your Name" (as in, that exact string, not your actual name),
     * and the user IS a student.
     *     When not in edit mode, the text of the component must include "Your Name is a student"
     * or "Your Name is not a student".
     *     As another example, if the user entered their name as "Charles Babbage" and
     * said they were NOT a student, then the text would be "Charles Babbage is not a student".
     *     Whether or not the user is a student should be controlled by a regular checkbox,
     * not a switch or button.
     * HINT: We said "switch" and we meant it.
     * HINT: If you can't figure out why you are failing a test, READ THE TEST CODE.
     * The tests are the most specific form of description.
     * HINT: If an element is rendered not visible, then a test looking for it will fail.
     * If a test fails, check to see if the elements you have written are rendered in the Javascript.
     */

    //THESE ARE THE STATES (MODELS)
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    //THE CONTROLLERS ARE IN THE onChange ATTRIBUTES (as lambda functions)

    //THIS IS THE VIEW
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="toggle-edit-mode"
                label="Toggle Edit Mode"
                checked={inEditMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setInEditMode(event.target.checked)
                }
            ></Form.Check>
            <Form.Group
                controlId="usernameEditor"
                style={{ display: inEditMode ? "block" : "none" }}
            >
                <Form.Label>Edit Name:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUsername(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
            <Form.Check
                type="checkbox"
                style={{ display: inEditMode ? "block" : "none" }}
                id="check=if-student"
                label="Are you a student?"
                checked={isStudent}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setIsStudent(event.target.checked)
                }
            ></Form.Check>
            <div>
                {!inEditMode &&
                    `${username} ${isStudent ? "is" : "is not"} a student`}
            </div>
        </div>
    );
}
