import React, { useEffect } from "react";
import styled from "@emotion/styled";
import MyWork from "../graphics/MyWork";
import { Link } from "react-router-dom";
import ActionIcon from "../graphics/ActionIcon";

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

const Left = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Right = styled.div`
  flex-grow: 1;
  padding-top: 24px;
`;

const Teaser = styled.p`
  font-size: 18px;
  line-height: 20px;
  width: 191px;
  margin: 72px 0 0 2rem;
`;

const WorkLinkContainer = styled("div")`
  width: 100%;
  padding: 2.6em 0 0 2rem;
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
export default function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <TopWrapper>
        <Left>
          <Teaser>
            During the years I gathered experience in different design trades.
            Starting my education in the field of video production, I went on to
            study Integrated Design at KISD, where I gained knowledge about
            conceptual work and general design methods. Graphic design and
            photography have always been part of my work, education and passion.
            In recent years I decided to deepen my skill set in the field of
            UX/UI an webdesign.
          </Teaser>
        </Left>
        <Right>
          <MyWork />
        </Right>
      </TopWrapper>
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
    </Container>
  );
}
