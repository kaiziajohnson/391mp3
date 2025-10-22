import {Link} from "react-router";
import styled from 'styled-components';


const NavBar = styled.nav `

    background-color: darkmagenta;
    width: 30%;
    //padding: 20px;
    display: flex;
    justify-content: center;
    padding-right: 3%;
    //height: 80px;
    
    
    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 60px;
        padding-left: 5%;
    }

`;

const UL = styled.ul`
    list-style: none;
    padding: 0;
    
    display:flex;
    flex-direction: column;
    
    @media screen and (max-width: 1000px) {
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 2%;
    }
`

const StyledList = styled(Link) `
    border: 9px solid orchid;
    padding: 7%;
    margin: 7%;
    
    
    display: flex;
   
    background-color: orchid;
    width: 15vw;
    //justify-content: center;
    text-decoration: none;
    color: white;
    font-size: calc(2px + 1.5vw);
    font-weight: bold;


    @media screen and (max-width: 1000px) {
        //border: 10px solid orchid;
        padding: 1%;
        margin: 5px;
        
        flex-direction: row;
        width: auto;
        justify-content: center;
    }
`;

export default function Nav() {
    return (
        <NavBar>
            <UL>
                <li><StyledList to ={`/`}>Home</StyledList></li>
                <li><StyledList to ={`/education`}>Education</StyledList></li>
                <li><StyledList to ={`/experience`}>Experience</StyledList></li>
                <li><StyledList to ={`/skills`}>Skills</StyledList></li>
                <li><StyledList to ={`/projects`}>Projects</StyledList></li>
                <li><StyledList to ={`/references`}>References</StyledList></li>
            </UL>
        </NavBar>
    );
}