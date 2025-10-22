import {useState, useEffect} from "react";

//hook checks result and returns color

export function useSwitch(value: string) {
    const [color, setColor] = useState("black");

    useEffect(() => {
        if (value === null || value === undefined) {
            setColor("black");
        } else if (Number(value) < 0) {
            setColor("red");
        } else {
            setColor("black");
        }
    }, [value]);

    return color;
}