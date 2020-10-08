import React, { useEffect } from "react";
import styled from "@emotion/styled";
import lady from "../graphics/Lady.gif";
import ThisIsME from "../graphics/ThisIsME";
import ActionIcon from "../graphics/ActionIcon";
import { Link } from "react-router-dom";
import SliderStartpage from "../components/SliderStartpage";
import { mq } from "../components/MediaQueries";

const Container = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin: auto;
`;
const MiddleWrapper = styled.section`
  margin: auto;
`;

const MoreWrapper = styled(Link)`
  display: flex;
  width: 100%;
  padding: 0 0 0 120px;
  text-decoration: none;
`;

const MoreWorkWrapper = styled(MoreWrapper)`
  margin: 30px 0 0;
`;

const Lady = styled.img`
  width: 100%;
  max-width: 18em;
  height: auto;
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
  ${mq("small")} {
    width: 14em;
    font-size: 1.3rem;
    line-height: 1.4rem;
  }
`;

const MoreText = styled.p`
  width: fit-content;
  margin: 0 5px;
  color: ${(props) => props.theme.colors.sec};
  font-weight: 600;
`;

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
        </Right>
      </TopWrapper>
      <MiddleWrapper>
        <MoreWrapper to="/aboutMe">
          <ActionIcon /> <MoreText>More about me.</MoreText>
        </MoreWrapper>
        <MoreWorkWrapper to="/work">
          <ActionIcon /> <MoreText>More of my work.</MoreText>
        </MoreWorkWrapper>
      </MiddleWrapper>
      <SliderStartpage />
    </Container>
  );
}
