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

const Content = styled.div`
    color: black;
    text-align: center;
    font-size: calc(3px + 1vw);
    

    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 2vw);
    }
`;


export default function References() {
   return (
       <StyledMain>
           <title> References | Kaizia Johnson's Resume</title>
           <MainTitle>References</MainTitle>
           <Content>
           <p><b>Dr. Lynette Strickland</b>, Boston University Lecturer and Head of the CEEG Lab, <b>lynettes@bu.edu</b>
           </p>

           <br/>
           <p><b>Kenya Townsend</b>, Director of the Center for Excellence in Youth Education at the Icahn School of
               Medicine, <b>kenya.townsend@mssm.edu</b></p>

           <br/>
           <p><b>Karen Brown</b>, Executive Assistant at the Howard Thurman Center, <b>kmb@bu.edu</b></p>

           <br/>
           <p><b>James Eddy</b>, Assistant Director at the Howard Thurman Center, <b>jeddy@bu.edu</b></p>

           <br/>
           <p><b>Dr. Mirna Chehade</b>, Head of the Mount Sinai Center for Eosinophilic Disorders, <b>mchehade@mssm.edu</b>
           </p>
           </Content>
       </StyledMain>
   );
}