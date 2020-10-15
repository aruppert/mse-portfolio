import React, { useEffect } from "react";
import SliderDetail from "../components/SliderDetail";
import Photography from "../graphics/Photography";
import {
  fashion,
  lightPainting,
  urbanChoreo,
  CTG,
  misc,
} from "../content-data/FotoData";
import {
  Container,
  Teaser,
  Description,
  SVGWrapper,
  SectionWrapper
} from "../components/DetailPage";

export default function DetailFoto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
      <>
      <div>

      <SVGWrapper>
        <Photography />
      </SVGWrapper>
      <Teaser>
        "If your pictures aren't good enough, you're not close enough." -{" "}
        <i>Robert Capa</i>
      </Teaser>
      </div>
    <Container>

        <SectionWrapper>

      <SliderDetail
        title="Fashion Photography"
        subtitle="Concept. Photography. Lighting. Color Grading."
        year="2013"
        data={fashion}
        id="fashion"
      />
      <Description>
        During my work with Stu Shapiro in Cape Town we arranged fashion shoots
        for models to top upgrade their portfolios.
      </Description>
      </SectionWrapper>
      <SectionWrapper>

      <SliderDetail
        title="Light Painting Photography"
        subtitle="Concept. Location Scouting. Photography. Light painting. Directing (Choreography). Color Grading."
        year="2013"
        data={lightPainting}
        id="light-painting"
      />
      <Description>
        These pictures were taken during a project at KISD. Using light painting
        we protested against the housing and gentrification problems in major
        German cities.
      </Description>
      </SectionWrapper>
      <SectionWrapper>

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
      </SectionWrapper>
      <SectionWrapper>

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
      </SectionWrapper>
      <SectionWrapper>

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
      </SectionWrapper>


    </Container>
    </>
  );
}
