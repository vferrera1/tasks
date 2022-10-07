import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    /* Simulates a game where you roll two dice to try to get matching values.
     * However, you lose the game if your dice ever come up as a pair of ones ("snake eyes")
     *     You will need two states, one for each die.
     *     Each die's value should be rendered in the View in a <span> tag of their own,
     * with the first die having the "data-testid" of "left-die" and the
     * second die having the "data-testid" of "right-die".
     *     You will need two "Roll" buttons (labelled "Roll Left" and "Roll Right")
     *     Clicking a Roll button will change the value for the corresponding die
     * using the provided d6 function.
     *     The initial vlaues of the dice cannot be the same.
     *     When the two states both equal one, render a message that includes the word Lose.
     *     When the two states are equal (but not one), render a message that includes the word Win.
     *     If you do all these and are still not passing all tests,
     * read the test file, it's a good practice! In much of software engineering,
     * the tests ARE the product spec.
     */
    // Two states: One for each die
    const [leftDieValue, changeLeftValue] = useState<number>(1);
    const [rightDieValue, changeRightValue] = useState<number>(2);

    /* Add the following in as comments once you know how to do so.
     * Dice values rendered in View in a span tag
     * Roll buttons: When clicked, the value of the corresponding die is changed via d6 function
     * Rendered messages upon winning (matching dice) or losing (snake eyes)
     */
    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDieValue}</span>
                <span data-testid="right-die">{rightDieValue}</span>
            </div>
            <div>
                <Button onClick={() => changeLeftValue(d6())}>Roll Left</Button>
                <Button onClick={() => changeRightValue(d6())}>
                    Roll Right
                </Button>
            </div>
            <div>
                {leftDieValue === rightDieValue ? (
                    <>
                        {leftDieValue === 1 ? (
                            <span>Lose</span>
                        ) : (
                            <span>Win</span>
                        )}
                    </>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
