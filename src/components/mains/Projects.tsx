import styled from "styled-components";
import Calculator from "./Calc.tsx";

const StyledMain = styled.main`
    width:70%;
    min-height: 100vh;

    @media screen and (max-width: 1000px) {
        padding-left: 15%;
    }
`;

const MainTitle = styled.h1`
    text-align: center;
    padding-bottom: 2%;
    font-weight: bold;
    font-size: calc(2px + 2vw);
    color: darkmagenta;

    @media screen and (max-width: 1000px) {
        //padding-left: 15%;
        font-size: calc(2px + 3vw);
    }
`;

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


export default function Projects() {
    return (
        <StyledMain>

            <title> Projects | Kaizia Johnson's Resume</title>
            <MainTitle > Projects</MainTitle>
            <Content>
            <br/>
            <a href="https://github.com/MuhammadHunainKhurram/dill"> <SubTitle>Dill</SubTitle> </a>
            <p> I created this project a long with my teammates at the HackMIT hackathon. It is a simple web app that
                takes a pdf of information and parses it into a JSON file. Once the file is parsed, it is turned into a
                presentation through the use of the Google Slides API. </p>

            <br/>
            <a href="https://github.com/Sachin04t/Meat-the-Economy"> <SubTitle>Meat-The-Economy</SubTitle> </a>
            <p> This was a final project for BU's Data Science Tools Class. The Meatmerizor is a model that can predict
                the economic state of a country based on previous data of the country’s meat consumption and economic
                data.
                More specifically, the Meatmerizor takes in a country’s meat consumption per capita along with GDP per
                capita PPP for a given year in order to predict future trends. </p>
            </Content>

            <br/>
            <Calculator/>

        </StyledMain>
    );
}