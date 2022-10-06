import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    /* Simulates another part of the quiz application
     * Provides a "Start" and "Stop" button for quiz
     * Since the quiz should have a limited number of attempts,
     * there is also a "Mulligan" button to give more attempts
     *
     *     Need two pieces of state: The number of attempts and whether the quiz is in progress
     *         Initial number of attempts is 4
     *         Quiz initially NOT in progress
     *     Button labelled "Start Quiz" that puts the Quiz in progress
     * and decreases number of attempts by one
     *     Button labelled "Stop Quiz" that stops the Quiz from being in progress
     *     Button labelled "Mulligan" that increases attempts by one
     *     When quiz in progress, "Start Quiz" and "Mulligan" buttons are disabled
     *     When quiz not in progess, "Stop Quiz" button is disabled
     *     When the attempts (left) are zero, the "Start Quiz" button is disabled.
     */
    const [numAttempts, chgNumAttempts] = useState<number>(4);
    const [quizInProgress, flipProgress] = useState<boolean>(false);

    function initiateQuiz(): void {
        flipProgress(true);
        chgNumAttempts(numAttempts - 1);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={initiateQuiz}
                    disabled={quizInProgress || numAttempts === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => flipProgress(false)}
                    disabled={!quizInProgress}
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => chgNumAttempts(numAttempts + 1)}
                    disabled={quizInProgress}
                >
                    Mulligan
                </Button>
            </div>
            <div>
                Attempts left: <span>{numAttempts}</span>
            </div>
        </div>
    );
}
