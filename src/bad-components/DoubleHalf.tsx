import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Interface connects the state variable and state setter to the Doubler and Halver components.
// setDhValue and dhValue in the components are objects containing the respective attribute (?)
interface DoubleHalfProps {
    setDhValue: (dhValue: number) => void;
    dhValue: number;
}
//The state variable and state setter are properties (props) of the Doubler and Halver components
function Doubler({ setDhValue, dhValue }: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ setDhValue, dhValue }: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    /* Provides two buttons: one doubles the value, the other halves the value
     * Currently, the component is commented out because
     * it is broken and crashes your application.
     * Uncomment the component's instantiation in src/App.tsx,
     * and then fix the Component so that it works correctly.
     * You must NOT add or remove components; you can only MODIFY the existing components.
     * (Hint: You are free to delete files if they serve no purpose, though)
     */

    //Deleted file "DoubleHalfState.tsx" because you can't import/export state as a top level variable (into another file)
    const [dhValue, setDhValue] = useState<number>(10);

    /*Here, we are sharing the state of dhValue to the Doubler and Halver components by passing
     * the state variable and state setter as attributes to Double and Halver.
     */
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
