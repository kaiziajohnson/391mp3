import styled from 'styled-components';

const Bar = styled.div`
background: orchid;
    text-align: left;
    padding: 1%;
    //height: 100vh;
    //justify-content: center;

    @media screen and (max-width: 1000px) {
        height: 60px;
    }

`;
const Title = styled.h1`
    text-align: left;
    //padding: 5px;
    font-weight: bold;
    font-size: calc(1px + 2vw);
    color: black;
    
    @media screen and (max-width: 1000px) {
        font-size: calc(3px + 4vw);
    }

`;

const Subtitle = styled.h2`
   font-size: calc(1px + 1vw);
    font-weight: normal;

    @media screen and (max-width: 1000px) {
        font-size: calc(1px + 2vw);
    }


`;


export default function Header() {
    return (
    <Bar>
        <Title>Kaizia Johnson
            <Subtitle>Kaizia's Online Resume</Subtitle>
        </Title>
    </Bar>

    );
}