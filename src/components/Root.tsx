import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import {Route, Routes} from "react-router";
import Home from "./mains/Home.tsx"
import Education from "./mains/Edu.tsx"
import Experience from "./mains/Experience.tsx"
import Skills from "./mains/Skills.tsx";
import Projects from "./mains/Projects.tsx";
import References from "./mains/References.tsx";
import styled from "styled-components";
import '../App.css'


const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    background: thistle;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 1000px) {
        width: 80%;
        min-height: 100vh;
    }

`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    //margin: 0 auto;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;


export default function Root() {
    return (
            <Wrapper>
                <Header/>
                <Container>
                    <Nav/>
                    <Routes>
                        <Route path={`/`} element ={<Home/>}/>
                        <Route path={`/education`} element ={<Education/>}/>
                        <Route path={`/experience`} element ={<Experience/>}/>
                        <Route path={`/Skills`} element ={<Skills/>}/>
                        <Route path={`/projects`} element ={<Projects/>}/>
                        <Route path={`/references`} element ={<References/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </Wrapper>

    );
}