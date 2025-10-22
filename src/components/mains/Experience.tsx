import styled from 'styled-components';

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
    font-size: calc(2px + 1vw);
    color: black;
    
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 2vw);
    }

`;


const Content = styled.div`
    color: black;
    text-align: center;
    font-size: calc(3px + 1vw);
    

    @media screen and (max-width: 1000px) {
        font-size: calc(1px + 2vw);
    }
`;


const UL = styled.ul `

list-style: none;
    

`;

export default function Experience() {
    return (
        <StyledMain>
            <title> Experience | Kaizia Johnson's Resume</title>
            <MainTitle> Work Experience</MainTitle>

            <SubTitle > The Cassidine Ecology and Evolutionary Genomics Lab at Boston University</SubTitle>
            <SubTitle > Research Assistant</SubTitle>
            <Content>
            <UL>

                <li>Conducted detailed literature reviews to support research on species polymorphisms.</li>
                <li>Developed R scripts using the patternize package to analyze species color variation.</li>
                <li>Maintained accurate and organized records of experimental procedures and findings.</li>
                <li>Collaborated with faculty and graduate students to design and refine research methodologies.</li>
            </UL>
            <br/>
            <SubTitle > The Howard Thurman Center for Common Ground</SubTitle>
            <SubTitle > Office Assistant</SubTitle>
            <UL>
                <li>Welcomed and assisted guests at the front desk, ensuring a warm and professional experience while
                    efficiently
                    addressing any concerns or issues.
                </li>
                <li>Demonstrated exceptional customer service skills by answering and directing phone calls courteously
                    and promptly,
                    maintaining a positive image of the organization.
                </li>
                <li>Utilized strong organizational abilities to manage the opening and closing procedures of community
                    spaces.
                </li>
            </UL>
            <br/>
            <SubTitle > The Center for Excellence in Youth Education </SubTitle>
            <SubTitle > Intern & Teachers Assistant </SubTitle>
            <UL>
                <li>Assisted in biology and coding classes as a Teacher's Assistant, actively supporting students'
                    learning through mentoring
                    and hands-on guidance.
                </li>
                <li>Fostered a supportive learning environment by holding approachable office hours, offering
                    personalized assistance to
                    students seeking clarification and further understanding.
                </li>
                <li>Organized college and career events, connecting students with professionals and established
                    partnerships with medical
                    professionals for mutual support.
                </li>
            </UL>
            <br/>
            <SubTitle > The Mount Sinai Center for Eosinophilic Disorders (MSCED) </SubTitle>
            <SubTitle > Research Assistant </SubTitle>
            <UL>
                <li>Gathered and prepared research materials for studies, ensuring thoroughness and accuracy in data
                    collection.
                </li>
                <li>Processed and analyzed clinical trial samples using a centrifuge, contributing to reliable
                    experimental results
                    interpretation.
                </li>
                <li>Supported lab staff across diverse research domains, demonstrating versatility in various research
                    tasks and projects.
                </li>
            </UL>
        </Content>


        </StyledMain>
    );
}