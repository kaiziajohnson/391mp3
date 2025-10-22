import {useState} from 'react';

export default function Calculator(){
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [output, setOutput] = useState("Output");

    function doAdd() {
        setOutput(String(Number(one) + Number(two)))
    }
    function doSubtract() {
        setOutput(String(Number(one) - Number(two)))
    }
    function doMultiply() {
        setOutput(String(Number(one) * Number(two)))
    }
    function doDivide() {
        setOutput(String(Number(one) / Number(two)))
    }
    function doPower() {
        let result= 1;
        for (let i=0; i<Number(two); i++){
            result*=Number(one);
        }
        setOutput(String(result));

    }

    function doClear() {
        setOne("");
        setTwo("");
        setOutput("Output");
    }
    return (
        <div>
            <h1>Calculator</h1>
            <label> Give me a number: </label><input value={one} onChange={(e) => setOne(e.target.value)}/>
            <label> Give me a number: </label><input value={two} onChange={(e) => setTwo(e.target.value)}/>
            <div>
                <button onClick={doAdd}>Add</button>
                <button onClick={doSubtract}>Subtract</button>
                <button onClick={doMultiply}>Multiply</button>
                <button onClick={doDivide}>Divide</button>
                <button onClick={doClear}>Clear</button>
                <button onClick={doPower}>Power</button>
            </div>
            <h2 id="output">{output}</h2>
        </div>


    )



}
