import React from "react";
import styled from "@emotion/styled";
import ActionIcon from "../graphics/ActionIcon";
import { Link } from "react-router-dom";
import { mq } from "../components/MediaQueries";

export default function CV() {
  return (
    <>
      <SectionContainer>
        <SectionTitle>Long story short</SectionTitle>
        <CVHeadingWrapper>
          <CVHeadingPlaceholder />
          <CVHeading>Education</CVHeading>
        </CVHeadingWrapper>

        <CVEntryContainer>
          <CVEntryYear>2020</CVEntryYear>
          <CVEntryText>
            Courses in UX and UI design at cimdata academy, Cologne 
          </CVEntryText>
        </CVEntryContainer>

        <CVEntryContainer>
          <CVEntryYear>2014</CVEntryYear>
          <CVEntryText>Exchange semester at ZHDK, Zurich</CVEntryText>
        </CVEntryContainer>

        <CVEntryContainer>
          <CVEntryYear>2010 - 2015</CVEntryYear>
          <CVEntryText>
            Bachelor degree in Integrated Design at KISD, Cologne
          </CVEntryText>
        </CVEntryContainer>

        <CVEntryContainer>
          <CVEntryYear>2005 - 2008 </CVEntryYear>
          <CVEntryText>
            Apprenticeship as Mediadesigner in audiovisual Media, Fraunhofer
            IAIS
          </CVEntryText>
        </CVEntryContainer>

        <CVEntryContainer>
          <CVEntryYear>2004</CVEntryYear>
          <CVEntryText>High School, Martinus Gymnasium Linz/Rhein</CVEntryText>
        </CVEntryContainer>
      </SectionContainer>

      <SecondPartContainer>
        <SecondPartTitle>Long story short Part II</SecondPartTitle>

        <CVHeadingWrapper>
          <CVHeadingPlaceholder />
          <CVHeading>Work Experience</CVHeading>
        </CVHeadingWrapper>

        <CVEntryContainer>
          <CVEntryYear>2016</CVEntryYear>
          <CVEntryText>Social media editor, probono TV, Cologne </CVEntryText>
        </CVEntryContainer>

        <CVEntryContainer>
          <CVEntryYear>since 2014</CVEntryYear>
          <CVEntryText>Freelance designer and photographer </CVEntryText>
        </CVEntryContainer>

        <CVEntryContainer>
          <CVEntryYear>2014 - 2017</CVEntryYear>
          <CVEntryText>
            Freelance graphic designer and photographer, Lichtfaktor, Cologne
          </CVEntryText>
        </CVEntryContainer>

        <CVEntryContainer>
          <CVEntryYear>2013</CVEntryYear>
          <CVEntryText>
            Graphic designer and photographer, Stu Shapiro, Cape Town
          </CVEntryText>
        </CVEntryContainer>

        <CVEntryContainer>
          <CVEntryYear>2013</CVEntryYear>
          <CVEntryText>
            Social design project „Come To Gather“, Cape Town
          </CVEntryText>
        </CVEntryContainer>

        <CVEntryContainer>
          <CVEntryYear>2008 - 2009</CVEntryYear>
          <CVEntryText>
            Mediadesigner in audiovisual Media, Fraunhofer IAIS
          </CVEntryText>
        </CVEntryContainer>

        <ContactLink to="/contact">
          <ActionIcon />
          <ContactLinkText>Interested? Contact me here.</ContactLinkText>
        </ContactLink>
      </SecondPartContainer>
    </>
  );
}

const SectionContainer = styled.section`
  width: 90%;
  max-width: 25em;
  height: 30em;
  border-top: 3px solid #fff;
  margin: 2rem 0;
  ${mq("medium")} {
    margin: 4em 2em;
  }
`;

const SecondPartContainer = styled(SectionContainer)`
  border-top: 3px solid ${(props) => props.theme.colors.bg};
`;

const SectionTitle = styled.h2`
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;
`;

const SecondPartTitle = styled(SectionTitle)`
  color: ${(props) => props.theme.colors.bg};
`;

const CVHeadingWrapper = styled.div`
  display: flex;
  margin: 0 0 10px;
`;

const CVHeadingPlaceholder = styled.div`
  flex-grow: 1;
`;

const CVHeading = styled.h2`
  width: fit-content;
  font-weight: 100;
  font-size: 1.3rem;
  border-top: 0.5px solid white;
`;

const CVEntryContainer = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  margin: 2rem 0;
`;

const CVEntryYear = styled.aside`
  width: 25%;
  font-weight: 600;
  align-self: center;
`;

const CVEntryText = styled.p`
  width: 75%;
  font-weight: 100;
  border-left: 1px solid #fff;
  margin: 0;
  padding: 0 0.6rem;
`;

const ContactLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 3.5rem 0;
  text-decoration: none;
`;

const ContactLinkText = styled.p`
  width: fit-content;
  margin: 0 0.3em;
  color: ${(props) => props.theme.colors.sec};
  font-weight: 600;
`;
