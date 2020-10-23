import React, { useEffect } from "react";
import styled from "@emotion/styled";
import lady from "../graphics/Lady.gif";
import ThisIsME from "../graphics/ThisIsME";
import ActionIcon from "../graphics/ActionIcon";
import { Link } from "react-router-dom";
import SliderStartpage from "../components/SliderStartpage";
import { mq } from "../components/MediaQueries";

export default function Start() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <TopWrapper>
        <Left>
          <LadyWrapper>
            <Lady src={lady} />
          </LadyWrapper>
        </Left>
        <Right>
          <ThisIsME />
          <Teaser>
            I'm a passionate young designer working in the world of digital and
            audiovisual media! I can offer the whole range of video production
            starting from the concept up to the final clip. I am also an
            experienced photographer and graphic designer, who is able to plan
            and create a project from the first step.{" "}
          </Teaser>
          <MiddleWrapper>
            <MoreWrapper to="/aboutMe">
              <ActionIcon /> <MoreText>More about me.</MoreText>
            </MoreWrapper>
          </MiddleWrapper>
        </Right>
      </TopWrapper>
      <div>
        <SliderStartpage />
        <WorkLinkContainer>
          <WorkLink to="/detailUXUI">
            <ActionIcon />
            <WorkLinkText>UX/UI design.</WorkLinkText>
          </WorkLink>
          <WorkLink to="/detailVideo">
            <ActionIcon />
            <WorkLinkText>Videography.</WorkLinkText>
          </WorkLink>
          <WorkLink to="/detailFoto">
            <ActionIcon />
            <WorkLinkText>Photography.</WorkLinkText>
          </WorkLink>
          <WorkLink to="/detailGraphic">
            <ActionIcon />
            <WorkLinkText>Graphic design.</WorkLinkText>
          </WorkLink>
        </WorkLinkContainer>
      </div>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  height: 100%;
  ${mq("medium")} {
    flex-flow: row wrap;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  ${mq("medium")} {
    margin: 0;
  }
`;
const MiddleWrapper = styled.section`
  margin: auto;
`;

const MoreWrapper = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
`;

const Lady = styled.img`
  width: 100%;
  max-width: 16em;
  height: auto;
  padding: 0.5em 0 0 1em;
  ${mq("medium")} {
    padding: 0;
    font-size: 0.8em;
    max-width: 12em;
  }
`;

const LadyWrapper = styled.div`
  height: fit-content;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-end;
  /* width: 148px; */
`;

const Right = styled.div`
  flex-grow: 1;
  padding-top: 64px;
`;

const Teaser = styled.p`
  width: 12rem;
  font-size: 1.125rem;
  line-height: 1.25rem;
  padding: 0 0.4em;
  ${mq("small")} {
    width: 14em;
    font-size: 1.3rem;
    line-height: 1.4rem;
  }
`;

const MoreText = styled.p`
  width: fit-content;
  margin: 0 5px;
  color: var(--dark-sec);
  font-weight: 600;
`;

const WorkLinkContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 2.8em 2em;
  margin: auto;
  max-width: 25em;
  ${mq("medium")} {
    padding: 3em 0 0 0.3em;
  }
`;

const WorkLink = styled(Link)`
  display: flex;
  margin: 0.6rem 0 0;
  text-decoration: none;
  width: max-content;
`;

const WorkLinkText = styled.p`
  width: fit-content;
  margin: 0 5px;
  color: var(--dark-sec);
  font-weight: 600;
`;
