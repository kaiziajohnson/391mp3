import {useState, useEffect} from "react";

//hook changes answer color

export function useSwitchColor(output: string) {
    const [color, setColor] = useState("black");

    useEffect(() => {
        if (output === null || output === "undefined") {
            setColor("black");
        } else if (Number(output) < 0) {
            setColor("red");
        } else {
            setColor("black");
        }
    }, [output]);

    return color;
}