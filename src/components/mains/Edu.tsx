import mse from  "../../imgs/mse.jpg"
import cds from  "../../imgs/cds.jpg"
import styled from "styled-components";

const StyledMain = styled.main`
    width:70%;
    min-height: 100vh;
    
    @media screen and (max-width: 1000px) {
        padding-left: 20%;
    }
`;

const IMG = styled.img`
    width: 50%;
    height: 30%;
    display: block;
    margin: 0 auto;
    //border-radius: 15%;
    padding: 5px;

    @media screen and (max-width: 1000px) {
        width: 60%;
        height: 60%;
    }
    
`;

const MainTitle = styled.h1`
    text-align: center;
    padding-bottom: .5%;
    font-weight: bold;
    font-size: calc(2px + 2vw);
    color: darkmagenta;

    @media screen and (max-width: 1000px) {
        //padding-left: 15%;
        font-size: calc(2px + 3vw);
        padding-bottom: 5%;
    }
`;

const SubTitle = styled.h2`
    text-align: center;
    padding-bottom: .5%;
    font-weight: bold;
    font-size: calc(2px + 1.5vw);
    color: black;
    
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 2vw);
    }

`;

const Content = styled.div`
    color: black;
    text-align: center;

    @media screen and (max-width: 1000px) {
        padding-left: 12%;
    }
`;

export default function Edu() {
    return (
        <StyledMain>
            <title> Education | Kaizia Johnson's Resume</title>
            <MainTitle> Educational Background</MainTitle>
            <SubTitle> Boston University - College of Arts and Sciences:</SubTitle>
            <IMG src= {cds} alt="The Computing and Data Sciences Building at BU"/>
            <Content>
            <p> Bachelor of Arts Degree: Computer Science, Minor: Biology</p>
            <p> Relevant Coursework: Software Engineering, Analysis of Algorithms, Data Structures, Database Structures,
                Data Science Tools, Distributed Systems</p>
            </Content>
            <br/>
            <SubTitle> The High School for Math, Science, and Engineering:</SubTitle>
            <IMG src =  {mse} alt="The High School for Math, Science, and Engineering"/>
            <Content>
            <p> I was a part of the science track which involved a two-year Biomedical Science Enrichment Program at the
                Center for Excellence in Youth Education (CEYE) at Mount Sinai Hospital.</p>
            <p> In my first year of the program I was taught by a Mount Sinai Doctor that specialized in biomedical
                research. </p>
            <p> In the second year of the program I became a clinical research assistant in the Mount Sinai Center for
                Eosinophilic Disorders (MSCED). </p>
            </Content>
        </StyledMain>
    );
}