import styled from 'styled-components'

const FooterBar = styled.div`
background-color: orchid;
    text-align: left;
    
    @media screen and (max-width: 1000px) {
        
    }

`;

const Credits = styled.div`

color: black;

`;


export default function Footer() {
    return (
        <FooterBar>
            <Credits> All rights reserved by Kaizia Johnson<a href=" "> Credits</a>&#169;</Credits>
        </FooterBar>
    )
}