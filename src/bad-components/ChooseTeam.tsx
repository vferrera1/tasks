import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    /* Provides a list of buttons representing people, and a list of people representing a team.
     * Clicking a button adds the given person to the team on the right,
     * if they are not already there.
     * Currently, the component is broken and partially out,
     * because its click handlers are not coded correctly to properly update state.
     * Fix the click handler functions so that the component works correctly.
     * (Hint: You will want to modify the signature and binding of one of the inner helper functions.)
     * You must not add or remove components; you can only MODIFY the existing components.
     */
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string) {
        if (!team.includes(newMember)) {
            //team.push(newMember); Must follow rules of immutability to process state correctly
            // Update 'team' state with a new team list
            const newTeam = [...team, newMember];
            setTeam(newTeam);
            // Update the 'allOptions' state with a new options list
            const remainingOptions = [...allOptions];
            remainingOptions.splice(
                remainingOptions.findIndex(
                    (option: string): boolean => option === newMember
                ),
                1
            );
            setAllOptions(remainingOptions);
        }
    }

    function clearTeam() {
        //team = []; Same as above; must create a new team array to process state correctly.
        // Update 'team' state with an empty list
        const noTeam: string[] = [];
        setTeam(noTeam);
        // Reset the 'allOptions' state to its original set of values
        const originalOptions = PEOPLE;
        setAllOptions(originalOptions);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => chooseMember(option)}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
