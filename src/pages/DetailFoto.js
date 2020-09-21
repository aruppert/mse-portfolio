import React, { useEffect } from "react";
import styled from "@emotion/styled";
import SliderDetail from "../components/SliderDetail";
import Photography from "../graphics/Photography";
import {
  fashion,
  lightPainting,
  urbanChoreo,
  CTG,
  misc,
} from "../slider-data/FotoData";

const Container = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
`;

const Teaser = styled.p`
  width: 100%;
  padding: 0 16%;
  margin: 1rem 0;
  font-size: 18px;
  line-height: 20px;
`;
const Description = styled.p`
  width: 100%;
  margin: 1.5rem 0 0 0;
  padding: 0 1rem;
`;

const SVGWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`;

export default function DetailFoto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <SVGWrapper>
        <Photography />
      </SVGWrapper>
      <Teaser>
        "If your pictures aren't good enough, you're not close enough." -{" "}
        <i>Robert Capa</i>
      </Teaser>
      <SliderDetail
        title="Fashion Photography"
        subtitle="Concept. Photography. Lighting. Color Grading."
        year="2013"
        data={fashion}
      />
      <Description>
        During my work with Stu Shapiro in Cape Town we arranged fashion shoots
        for models to top upgrade their portfolios.
      </Description>
      <SliderDetail
        title="Light Painting Photography"
        subtitle="Concept. Location Scouting. Photography. Light painting. Directing (Choreography). Color Grading."
        year="2013"
        data={lightPainting}
      />
      <Description>
        These pictures were taken during a project at KISD. Using light painting
        we protested against the housing and gentrification problems in major
        German cities.
      </Description>
      <SliderDetail
        title="Urban Choreography"
        subtitle="Concept. Photography. Color Grading."
        year="2013"
        data={urbanChoreo}
      />
      <Description>
        This project at KISD was about capturing moments in Colognes daily
        street life and unite them in a series.
      </Description>
      <SliderDetail
        title='"Come To Gather"-Project (Documentation)'
        subtitle="Photography. Social Design."
        year="2013"
        data={CTG}
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
        part of town no matter if they have a roof over their head or not..
        These pictures document our journey.
      </Description>
      <SliderDetail
        title="Miscellaneous Photography"
        subtitle="Photography. Color Grading. Picture Editing."
        year="on going"
        data={misc}
      />
      <Description>
        Here you find some selected pictures from my street and travel
        photography.
      </Description>
    </Container>
  );
}
