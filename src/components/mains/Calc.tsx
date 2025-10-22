import {useState} from 'react';
import {useSwitchColor} from "./hook.tsx";
import styled from "styled-components";

const SubTitle = styled.h2`
    text-align: center;
   padding-bottom: 1%;
    font-weight: bold;
    font-size: calc(2px + 2vw);
    color: black;
    
    @media screen and (max-width: 1000px) {
        
        font-size: calc(2px + 3vw);
        
    }

`;

const Content = styled.div`
    color: black;
    text-align: center;
    font-size: calc(3px + 1vw);
    

    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 2vw);
    }
`;

export default function Calculator(){
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [output, setOutput] = useState("Output");

    const color = useSwitchColor(output);

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
            <br/>
            <SubTitle>Calculator</SubTitle>

            <Content>
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
            <h2 style = {{color}} >{output}</h2>
            </Content>
        </div>


    )



}
