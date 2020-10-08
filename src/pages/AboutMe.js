import React, { useEffect } from "react";
import styled from "@emotion/styled";
import AboutMeSVG from "../graphics/AboutMeSVG";
import Ae from "../graphics/Ae.svg";
import Ai from "../graphics/Ai.svg";
import Css from "../graphics/Css.svg";
import Html from "../graphics/Html.svg";
import Id from "../graphics/Id.svg";
import Lr from "../graphics/Lr.svg";
import Pr from "../graphics/Pr.svg";
import Ps from "../graphics/Ps.svg";
import XD from "../graphics/XD.svg";
import Sketch from "../graphics/Sketch.svg";
import Office from "../graphics/Office.svg";
import fields2 from "../graphics/Fields2.svg";
import Hobby_Reisen from "../graphics/Hobby_Reisen.svg";
import Hobby_Musik from "../graphics/Hobby_Musik.svg";
import Hobby_Foto from "../graphics/Hobby_Foto.svg";
import CV from "../components/CV";
import { mq } from "../components/MediaQueries";

const Container = styled.main`
  display: flex;
  flex-flow: column nowrap;
  ${mq("medium")} {
    flex-flow: row wrap;
  }
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

const Top = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  ${mq("medium")} {
  }
`;

const Placeholder = styled.div`
  width: 0em;
  ${mq("medium")} {
    flex-grow: 1;
    width: 20em;
  }
`;

const Quote = styled.aside`
  width: 90%;
  max-width: 26.5em;
  margin: 1.5rem 1.5rem 1.5rem auto;
  font-size: 18px;
  font-weight: 200;
  line-height: 20px;
`;

const QuoteAuthor = styled.p`
  text-align: end;
  padding: 0 1.5rem;
  font-weight: 400;
`;

const FotoWrapper = styled.div`
  align-self: end;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 12em;
  ${mq("medium")} {
    height: 18em;
  }
  margin: 2rem 0.8rem;
  padding: 0 2rem 0 0;
`;

const Foto = styled.img`
  height: 100%;
  border-radius: 0.5em;
  margin: 0 0.3rem;
`;

const SectionContainer = styled.section`
  width: 90%;
  max-width: 25em;
  border-top: 3px solid #fff;
  margin: 2rem 0;
  ${mq("medium")} {
    height: 9em;
    margin: 4em 2em;
  }
`;

const TopSectionContainer = styled(SectionContainer)`
  ${mq("medium")} {
    height: 27em;
    margin: 0 2em;
  }
`;

const SectionTitle = styled.h2`
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const IconRowMiddle = styled(IconRow)`
  width: 80%;
  margin: auto;
`;

const HobbiesWrapper = styled.div`
  display: flex;
`;

const Icon = styled.img`
  height: 4rem;
`;

const FieldsOfWorkGraphic = styled.img`
  margin-top: 0.3rem;
  max-height: 400px;
  margin: auto;
`;

const HobbyIcons = styled.img`
  height: 5.5rem;
`;

const Text = styled.p`
  margin-bottom: -1rem;
`;

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  return (
    <Container>
      <Top>
        <Placeholder />
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
          <QuoteAuthor>- Walt Disney</QuoteAuthor>
        </Quote>
      </Top>
      <TopSectionContainer>
        <SectionTitle>Software Skills</SectionTitle>
        <IconRow>
          <Icon src={Ps} alt="Ps Icon" />
          <Icon src={Ai} alt="Ai Icon" />
          <Icon src={Lr} alt="Lr Icon" />
          <Icon src={Id} alt="Id Icon" />
        </IconRow>
        <IconRowMiddle>
          <Icon src={Pr} alt="Pr Icon" />
          <Icon src={Ae} alt="Ae Icon" />
          <Icon src={Office} alt="Office Icon" />
        </IconRowMiddle>
        <IconRow>
          <Icon src={XD} alt="XD Icon" />
          <Icon src={Sketch} alt="Sketch Icon" />
          <Icon src={Html} alt="Html Icon" />
          <Icon src={Css} alt="Css Icon" />
        </IconRow>
      </TopSectionContainer>
      <TopSectionContainer>
        <SectionTitle>Fields of Work</SectionTitle>
        <FieldsOfWorkGraphic src={fields2} />
      </TopSectionContainer>
      <SectionContainer>
        <SectionTitle>languages</SectionTitle>
        <Text>German, English</Text>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Hobbies</SectionTitle>
        <HobbiesWrapper>
          <HobbyIcons src={Hobby_Foto} />
          <HobbyIcons src={Hobby_Musik} />
          <HobbyIcons src={Hobby_Reisen} />
        </HobbiesWrapper>
      </SectionContainer>
      <CV />
    </Container>
  );
}
