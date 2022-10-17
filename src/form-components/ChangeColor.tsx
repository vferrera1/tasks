import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    /* Offers the user a bunch of radio buttons labeled with different colors;
     * choosing a radio button updates the text and color of a nearby box of text.
     *     You will need state to represent the choosen color
     *     You are free to make up your own list of colors,
     * but you must have AT LEAST 8 unique colors.
     *     Each color must be represented by a radio button.
     *     There should be a box of text with a 'data-testid="colored-box"' attribute and value.
     *     The box of text should have the same text and "backgroundColor" style
     * as the currently selected radio button.
     * HINT: We strongly recommend you use "map" to render all the color's "Form.Check" tags
     * rather than hardcoding each one!
     * HINT: We recommend you use the "inline" attribute for the radio buttons.
     */

    // THIS IS THE STATE (MODEL)
    const [choosenColor, setChoosenColor] = useState<string>("");
    const COLORS = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "brown",
        "white",
        "gray",
        "black"
    ];
    // THIS IS THE CONTROLLER
    function selectColor(color: string) {
        setChoosenColor(color);
    }
    // THIS IS THE VIEW
    // Make (at least) 8 radio buttons and a box of text (with choosen color)
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={() => selectColor(color)}
                    id={"select " + color}
                    label={color}
                    value={color}
                    checked={choosenColor === color}
                ></Form.Check>
            ))}
            <div>
                You have choosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: choosenColor }}
                >
                    {choosenColor}
                </span>
            </div>
        </div>
    );
}
