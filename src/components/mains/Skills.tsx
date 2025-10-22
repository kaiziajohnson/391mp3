import styled from "styled-components";

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
    text-align: left;
   padding-bottom: 1%;
    font-weight: bold;
    font-size: calc(2px + 1vw);
    color: black;
    
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 2vw);
    }

`;

const UL = styled.ul`
list-style: none;
`;

const LI = styled.li`

    padding: .5%;

`


export default function Skills () {
    return (
        <StyledMain>
            <title> Skills | Kaizia Johnson's Resume</title>
            <MainTitle > My Skills</MainTitle>
            <SubTitle > Technical Skills:</SubTitle>
            <UL>
                <LI>Python</LI>
                <LI>Java</LI>
                <LI> R</LI>
                <LI>HTML</LI>
                <LI>Github</LI>
                <LI>Proficiency in Microsoft</LI>
            </UL>
            <br/>
            <SubTitle > General Skills:</SubTitle>
            <UL>
                <LI>Time Management</LI>
                <LI>Flexibility & Problem Solving</LI>
                <LI>Organization</LI>
                <LI>Customer Service Training</LI>
            </UL>
            <br/>
            <SubTitle > Languages:</SubTitle>
            <UL>
                <LI>Fluent in English</LI>
                <LI>Conversational Proficiency in German</LI>
            </UL>


        </StyledMain>
    );
}