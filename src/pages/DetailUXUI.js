import React, { useEffect } from "react";
import SliderDetail from "../components/SliderDetail";
import UXUI from "../graphics/UXUI";
import {
  economadData,
  wheelOfBelieves,
  facettenWebseite,
  cantTouchThis,
} from "../content-data/UXUIData";
import {
  Container,
  Teaser,
  Description,
  SVGWrapper,
  SectionWrapper,
} from "../components/DetailPage";

export default function DetailUXUI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div>
        <SVGWrapper>
          <UXUI />
        </SVGWrapper>
        <Teaser>
          The art of User experience- and User interface design is to find the
          best combination of function and form.
        </Teaser>
      </div>
      <Container>
        <SectionWrapper>
          <SliderDetail
            title="Economad"
            subtitle="UX. UI. Graphics. Prototyping."
            year="2020"
            data={economadData}
          />
          <Description>
            The task during the UX-AdobeXD course at “cimdata Bildungsakademie”
            was to develop a project from idea generation to a first prototype.
            Our group has dealt with the idea of ​​a sustainable travel tool
            that connects fair and climate-friendly businesses with travelers. A
            special challenge was the function of the “Reisefinder”, which
            offers ideas based on specific data instead of looking for offers in
            a specific place. The implementation of a user story was build
            individually.
          </Description>
        </SectionWrapper>
        <SectionWrapper>
          <SliderDetail
            title="The Wheel of Believes (Final Thesis)"
            subtitle="UX. UI. Graphics. CI. Videography. Animation. Content."
            year="2015"
            data={wheelOfBelieves}
            id="final_thesis"
          />
          <Description>
            The <i>Wheel of Believes</i> is a draft of an interactive web
            documentary on the subject ‚What is religious believe?‘ and ‚Where
            are the similarities between religions?‘. The goal ist to provide
            information about living within the five world religions and atheism
            and thereby provoke the audience to think about and debate about the
            different world views. The web documentary with its possibilities of
            interaction and non-linear storytelling, provides opportunities to
            compare individual aspects of different religious and non-religious
            beliefs. This being my final thesis of my bachelor degree I
            developed the whole project from start to finish individually.
          </Description>
        </SectionWrapper>
        <SectionWrapper>
          <SliderDetail
            title="10 Facetten Webseite"
            subtitle="UX. UI. Graphics. CI. Videography."
            year="2014"
            data={facettenWebseite}
          />
          <Description>
            For the web documentary <i>www.10facetten.ch</i> we had to find an
            online solution, which allows direct access to each of the
            videoclips without forcing a priority between the clips. Therefore
            we used the wellknown slideshow model. To give an easy access to
            each individual film, we decided to use special icons, which relate
            to the topics. The project was implemented in collaboration with{" "}
            <i>www.srsly.ch</i>.
          </Description>
        </SectionWrapper>
        <SectionWrapper>
          <SliderDetail
            title="Can't touch this"
            subtitle="Design Research. Concept. UX. Arduino Coding. Content."
            data={cantTouchThis}
            year="2014"
            id="canttouchthis"
          />
          <Description>
            The task during this KISD short term project was it to design an
            exhibition piece that deals with the subject of touch in our digital
            world. UX and UI design are often reduced to digital devices, but in
            the real world there is a much wider range of haptic, touchy and
            emotional sensations, then 'pictures behind glass'. The Cabinet of
            Curiosities was presented during the Expo Case Touch in 2014.
          </Description>
        </SectionWrapper>
      </Container>
    </>
  );
}
