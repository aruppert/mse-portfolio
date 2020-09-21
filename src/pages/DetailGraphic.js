import React, { useEffect } from "react";
import styled from "@emotion/styled";
import SliderDetail from "../components/SliderDetail";
import GraphicDesign from "../graphics/GraphicDesign";
import {
  illustration,
  wheelOfBelieves,
  CTGIG,
} from "../slider-data/GraphicData";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  justify-content: center;
`;

const Teaser = styled.p`
  font-size: 18px;
  line-height: 20px;
  padding: 0 16%;
  margin: 1rem 0;
  width: 100%;
`;
const Description = styled.p`
  padding: 0 16%;
  margin: 1.5rem 0 0 0;
  padding: 0 1rem;
  width: 100%;
`;

const SVGWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function DetailGraphic() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container>
      <SVGWrapper>
        <GraphicDesign />
      </SVGWrapper>
      <Teaser>
        “If no one hates it, no one really loves it.” – Jessica Walsh
      </Teaser>

      <SliderDetail
        title="Illustrations for this website"
        subtitle="Illustration."
        year="2020"
        data={illustration}
      />
      <Description>
        I wanted to have an Eye-Catching starting point for this website, so I
        tried out different illustration styles until I selected the curly girl.
      </Description>
      <SliderDetail
        title="The Wheel of Believes (CI)"
        subtitle="Layout. Illustration. CI."
        year="2015"
        data={wheelOfBelieves}
      />
      <Description>
        For my Bachelor Thesis I also designed the logo and graphical elements
        for the fictional website.
      </Description>
      <SliderDetail
        title="Come To Gather (Image Campaign)"
        subtitle="Concept. Photography. Graphic Design."
        year="2013"
        data={CTGIG}
        imagestyle="contain"
      />
      <Description>
        During my time in Cape Town some fellow designers and me started talking
        to a group of homeless people to find about their daily life and their
        every day problems as part of a design research project. Our goal was to
        find social design solutions to help their problems. One of their main
        issues was how they were seen by the people living and working in the
        buildings around them. So we decided to introduce these lovely people
        via postcards to their community. We also organized a
        Claim-your-streets-event to bring together the people living in these
        part of town no matter if they have a roof over their head or not.
      </Description>
    </Container>
  );
}
