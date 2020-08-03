import React from "react";
import styled from "@emotion/styled";
import lady from "../graphics/Lady.gif";
import ThisIsME from "../graphics/ThisIsME";
import ActionIcon from "../graphics/ActionIcon";
import { Link } from "react-router-dom";
import SliderStartpage from "../components/SliderStartpage";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  justify-content: center;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const MoreWrapper = styled(Link)`
  width: 100%;
  display: flex;
  padding: 0 0 0 120px;
  text-decoration: none;
`;

const MoreWorkWrapper = styled(MoreWrapper)`
  margin: 30px 0 0;
`;

const Lady = styled.img`
  height: max-content;
  width: 127px;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 148px;
`;

const Right = styled.div`
  flex-grow: 1;
  padding-top: 64px;
`;

const Teaser = styled.p`
  font-size: 18px;
  line-height: 20px;
  width: 191px;
`;

const MoreText = styled.p`
  margin: 0 5px;
  width: fit-content;
  font-weight: 600;
  color: ${(props) => props.theme.colors.sec};
`;

const Navbar = styled.nav`
  height: 100%;
  margin: 20px 5px 0;
  display: flex;
  font-weight: 400;
  justify-content: end;
`;

const Navbutton = styled(Link)`
  text-decoration: none;
  align-self: flex-end;
  color: ${(props) => props.theme.colors.prim};
`;

export default function Start() {
  return (
    <Container>
      <TopWrapper>
        <Left>
          <Lady src={lady} />
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
      <MoreWrapper>
        <ActionIcon /> <MoreText>More about me.</MoreText>
      </MoreWrapper>
      <MoreWorkWrapper>
        <ActionIcon /> <MoreText>More of my work.</MoreText>
      </MoreWorkWrapper>
      <SliderStartpage />
      <Navbar>
        <Navbutton>Impressum.</Navbutton>
      </Navbar>
    </Container>
  );
}
