import React from "react";
import styled from "@emotion/styled";
import ActionIcon from "../graphics/ActionIcon";
import { Link } from "react-router-dom";
import { mq } from "../components/MediaQueries";
import { educationData, workExperienceData } from "../content-data/CVData";

export default function CV() {
  return (
    <>
      <SectionContainer>
        <SectionTitle>Long story short</SectionTitle>
        <CVHeadingWrapper>
          <CVHeadingPlaceholder />
          <CVHeading>Education</CVHeading>
        </CVHeadingWrapper>

        {educationData.map((entry) => (
          <CVEntryContainer key={entry.id}>
            <CVEntryYear>{entry.year}</CVEntryYear>
            <CVEntryText>{entry.text}</CVEntryText>
          </CVEntryContainer>
        ))}
      </SectionContainer>

      <SecondPartContainer>
        <SecondPartTitle>Long story short part II</SecondPartTitle>
        <CVHeadingWrapper>
          <CVHeadingPlaceholder />
          <CVHeading>Work Experience</CVHeading>
        </CVHeadingWrapper>

        {workExperienceData.map((entry) => (
          <CVEntryContainer key={entry.id}>
            <CVEntryYear>{entry.year}</CVEntryYear>
            <CVEntryText>{entry.text}</CVEntryText>
          </CVEntryContainer>
        ))}

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
  max-width: 23em;
  height: 30em;
  border-top: 0.2em solid var(--dark-pri);
  margin: 2rem 0;
  ${mq("medium")} {
    margin: 3em 1em;
    justify-self: center;
  }
`;

const SecondPartContainer = styled(SectionContainer)`
  border-top: 0.2em solid var(--dark-bg);
  margin: 3rem 0;
`;

const SectionTitle = styled.h2`
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-transform: uppercase;
`;

const SecondPartTitle = styled(SectionTitle)`
  color: var(--dark-bg);
`;

const CVHeadingWrapper = styled.div`
  display: flex;
  margin: 0 0 0.6em;
`;

const CVHeadingPlaceholder = styled.div`
  flex-grow: 1;
`;

const CVHeading = styled.h2`
  width: fit-content;
  font-weight: 100;
  font-size: 1.3rem;
  border-top: 0.03em solid var(--dark-pri);
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
  border-left: 0.006em solid var(--dark-pri);
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
  color: var(--dark-sec);
  font-weight: 600;
`;
