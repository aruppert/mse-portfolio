import React, { useEffect } from "react";
import styled from "@emotion/styled";
import AboutMeSVG from "../graphics/AboutMeSVG";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const Quote = styled.aside`
  font-size: 18px;
  font-weight: 200;
  line-height: 20px;
  margin: 1.5rem;
  width: 90%;
`;

const QuoteAuthor = styled.p`
  font-weight: 400;
  text-align: end;
`;

const FotoWrapper = styled.div`
  height: 162px;
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0.8rem;
  align-self: end;
`;

const Foto = styled.img`
  height: 100%;
  margin: 0 0.3rem;
`;
const SoftwareSkillsContainer = styled.section`
  width: 90%;
  border-top: 3px solid #fff;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;
`;

const WorkLink = styled(Link)`
  width: 100%;
  display: flex;
  text-decoration: none;
  margin: 0.6rem 0 0;
`;

const WorkLinkText = styled.p`
  margin: 0 5px;
  width: fit-content;
  font-weight: 600;
  color: ${(props) => props.theme.colors.sec};
`;
export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <FotoWrapper>
        <AboutMeSVG />
        <Foto
          src="https://res.cloudinary.com/dkjkkarud/image/upload/v1599483556/Miriam_Exner_c_tmj40i.jpg"
          alt="Portait of me"
        />
      </FotoWrapper>

      <Quote>
        "You can design and create, and build the most wonderful place in the
        world. But it takes people to make the dream a reality."
        <QuoteAuthor>-Walt Disney</QuoteAuthor>
      </Quote>
      <SoftwareSkillsContainer>
        <SectionTitle>Software Skills</SectionTitle>
      </SoftwareSkillsContainer>
    </Container>
  );
}
