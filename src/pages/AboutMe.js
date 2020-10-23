import React, { useEffect } from "react";
import styled from "@emotion/styled";
import AboutMeSVG from "../graphics/AboutMeSVG";
import Ae from "../graphics/skills/Ae.svg";
import Ai from "../graphics/skills/Ai.svg";
import Css from "../graphics/skills/Css.svg";
import Html from "../graphics/skills/Html.svg";
import Id from "../graphics/skills/Id.svg";
import Lr from "../graphics/skills/Lr.svg";
import Pr from "../graphics/skills/Pr.svg";
import Ps from "../graphics/skills/Ps.svg";
import XD from "../graphics/skills/XD.svg";
import Sketch from "../graphics/skills/Sketch.svg";
import Office from "../graphics/skills/Office.svg";
import fields2 from "../graphics/Fields2.svg";
import Hobby_Reisen from "../graphics/Hobby_Reisen.svg";
import Hobby_Musik from "../graphics/Hobby_Musik.svg";
import Hobby_Foto from "../graphics/Hobby_Foto.svg";
import CV from "../components/CV";
import { mq } from "../components/MediaQueries";

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Top>
        <Placeholder />
        <FotoWrapper>
          <AboutMeSVG />
          <Foto
            src="https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599483556/Miriam_Exner_c_tmj40i.jpg"
            alt="Portrait of Miriam"
          />
        </FotoWrapper>
        <Quote>
          &#34;You can design and create, and build the most wonderful place in
          the world. But it takes people to make the dream a reality.&#34;
          <QuoteAuthor>- Walt Disney</QuoteAuthor>
        </Quote>
      </Top>
      <Container>
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
    </>
  );
}

const Container = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  ${mq("medium")} {
    width: 95%;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  }
`;

const Top = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
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
  font-size: 1.125em;
  font-weight: 200;
  line-height: 1.25em;
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
  align-items: flex-end;
  width: 100%;
  height: 12em;
  ${mq("medium")} {
    height: 18em;
  }
  margin: 2rem 0.8rem;
  padding: 0 1rem 0 0;
`;

const Foto = styled.img`
  height: 100%;
  border-radius: 0.5em;
  margin: 0 0.3rem;
`;

const SectionContainer = styled.section`
  width: 90%;
  max-width: 23em;
  border-top: 0.2em solid var(--dark-pri);
  margin: 2rem 0;
  ${mq("medium")} {
    height: 9em;
    margin: 3em 1em;
    justify-self: center;
  }
`;

const TopSectionContainer = styled(SectionContainer)`
  ${mq("medium")} {
    height: 27em;
    margin: 0 1em;
    justify-self: center;
  }
`;

const SectionTitle = styled.h2`
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.25rem;
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
  justify-content: center;
`;

const Icon = styled.img`
  height: 4em;
`;

const FieldsOfWorkGraphic = styled.img`
  margin-top: 0.3rem;
  max-height: 25em;
  margin: auto;
`;

const HobbyIcons = styled.img`
  height: 5.5em;
`;

const Text = styled.p`
  margin-bottom: -1em;
`;
