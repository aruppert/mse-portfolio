import React from "react";
import styled from "@emotion/styled";
import MyWork from "../graphics/MyWork";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

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
  margin: 72px 0 0 32px;
`;

const Topics = styled.div`
  margin-top: 32px;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
`;

const TopicCard = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.prim};
  display: flex;
  flex-flow: column;
  border-top: 4px solid white;
  margin: 8px;
`;

const TopicImg = styled.img`
  width: 147px;
`;

export default function Work() {
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
      <Topics>
        <TopicCard to="/detail">
          VIDEOGRAPHY <TopicImg src={require(`../graphics/placehold.jpg`)} />
        </TopicCard>
        <TopicCard to="/detail">
          GRAPHIC DESIGN <TopicImg src={require(`../graphics/placehold.jpg`)} />
        </TopicCard>
        <TopicCard to="/detail">
          CONCEPT/UX/UI <TopicImg src={require(`../graphics/placehold.jpg`)} />
        </TopicCard>
        <TopicCard to="/detail">
          PHOTOGRAPHY <TopicImg src={require(`../graphics/placehold.jpg`)} />
        </TopicCard>
      </Topics>
    </Container>
  );
}
