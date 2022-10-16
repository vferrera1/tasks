import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox(position: number): JSX.Element {
    // Move state to parent ShoveBox component
    //const [position, setPosition] = useState<number>(10);
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    /* The ShoveBox component provides a button that moves an adjacent box farther away,
     * by increasing the box's left margin.
     * Currently, part of the component's returned body is commented out because
     * it is broken and crashes your application. Uncomment the component's body and then
     * fix the component so that it works correctly.
     * You must NOT add or remove components; you can only MODIFY the existing components.
     */
    const [position, setPosition] = useState<number>(10);
    const box = MoveableBox(position);

    // Cannot access state fields outside of MoveableBox!
    /*return (
        <div>
            <h3>Shove Box</h3>
            { <span>The box is at: {box.position}</span>
            <div>
                <ShoveBoxButton
                    position={box.position}
                    setPosition={box.setPosition}
                ></ShoveBoxButton>
                {box}
            </div> }
        </div>
    );
    */
    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                {box}
            </div>
        </div>
    );
}
