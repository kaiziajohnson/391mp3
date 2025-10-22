import kj from '../../imgs/KJ photo.jpg'
import styled from "styled-components";

const KJ = styled.img`
    width: 38%;
    height: 38%;
    display: block;
    margin: 0 auto;
    border-radius: 15%;
    padding: 5px;

    @media screen and (max-width: 1000px) {
        width: 30vw;
        height: 30vh;
        padding-left: 7%;
    }
    
`;

const MainTitle = styled.h1`
    text-align: center;
    padding: 5px;
    font-weight: bold;
    font-size: calc(2px + 3vw);
    color: darkmagenta;

    @media screen and (max-width: 1000px) {
        padding-left: 15%;
    }
`;

const StyledMain = styled.main`
    width:70%;
    min-height: 100vh;

    @media screen and (max-width: 1000px) {
        padding-left: 20%;
    }
`;
const Content = styled.div`
    color: black;
    text-align: center;

    @media screen and (max-width: 1000px) {
        //padding-left: 20%;
    }
`;

export default function Home() {
    return (
        <StyledMain>
            <title> Home | Kaizia Johnson's Resume</title>
            <MainTitle> Home </MainTitle>
            <KJ src ={kj} alt = "Kaizia Johnson"/>
            <br></br>
            <Content>
                <p> Hi! My name is Kaizia, and I am a senior at Boston University majoring in Computer Science with a minor in Biology.</p>
                <p> My goal is to eventually work in bioinformatics or any other field that combines computer science with medicine/healthcare. I also plan to pursue a PHD in the next three years to further develop my skills in bioinformatics.</p>
                <br/>
                <p> Welcome to my website! It will showcase my education and employment history as well as my research experiences and computer science projects.</p>
            </Content>
        </StyledMain>
    )
}