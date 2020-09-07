import React, { useEffect } from "react";
import styled from "@emotion/styled";
import SliderDetail from "../components/SliderDetail";
import UXUI from "../graphics/UXUI";

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

export default function DetailUXUI() {
  const economadData = [
    {
      id: 1,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1596547270/Webseite/Work/UX%20UI/01%20Economad/01_economad_plvnjg.png",
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1596547269/Webseite/Work/UX%20UI/01%20Economad/02_economad_jktqd6.png",
    },
    {
      id: 3,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1596547270/Webseite/Work/UX%20UI/01%20Economad/03_economad_lpe05b.png",
    },
    {
      id: 4,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1596547269/Webseite/Work/UX%20UI/01%20Economad/04_economad_kul1dz.png",
    },
    {
      id: 5,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1596547270/Webseite/Work/UX%20UI/01%20Economad/05_economad_fngkpw.png",
    },
  ];
  const wheelOfBelieves = [
    // {
    //   id: 0,
    //   src: "https://i.vimeocdn.com/video/529011401_1280x720.jpg",
    // info: 'Ist identisch mit Bild 2'
    // },
    {
      id: 1,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1596704063/Webseite/Work/UX%20UI/02%20Wheel%20of%20Believes/01_Wheel_of_Believes_bylhbi.jpg",
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1596704056/Webseite/Work/UX%20UI/02%20Wheel%20of%20Believes/02_Wheel_of_Believes.jpg_ntfbqn.jpg",
    },
  ];
  const facettenWebseite = [
    {
      id: 1,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1596704097/Webseite/Work/UX%20UI/03%2010%20Facetten%20Website/02_10_Facetten_gqielh.jpg",
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1596704097/Webseite/Work/UX%20UI/03%2010%20Facetten%20Website/03_10_Facetten_nproia.jpg",
    },
    {
      id: 3,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1596704097/Webseite/Work/UX%20UI/03%2010%20Facetten%20Website/01_10_Facetten_kret6q.jpg",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <SVGWrapper>
        <UXUI />
      </SVGWrapper>
      <Teaser>
        The art of User experience- and User interface design is to find the
        best combination of function and form.
      </Teaser>

      <SliderDetail
        title="Economad"
        subtitle="UX, UI, Graphics, Prototyping"
        year="2020"
        data={economadData}
      />
      <Description>
        The task during the UX-AdobeXD course at “cimdata Bildungsakademie” was
        to develop a project from idea generation to a first prototype. Our
        group has dealt with the idea of{" "}
      </Description>
      <SliderDetail
        title="The Wheel of Believes (Final Thesis)"
        subtitle="UX, UI, Graphics, CI, Videography, Animation, Content"
        year="2015"
        data={wheelOfBelieves}
      />
      <Description>
        The <i>Wheel of Believes</i> is a draft of an interactive web
        documentary on the subject ‚What is religious believe?‘ and ‚Where are
        the similarities between religions?‘. The goal ist to provide
        information about living within the five world religions and atheism and
        thereby provoke the audience to think about and debate about the
        different world views. The web documentary with its possibilities of
        interaction and non-linear storytelling, provides opportunities to
        compare individual aspects of different religious and non-religious
        beliefs. This being my final thesis of my bachelor degree I developed
        the whole project from start to finish individually.
      </Description>
      <SliderDetail
        title="10 Facetten Webseite"
        subtitle="UX, UI, Graphics, CI, Videography"
        year="2014"
        data={facettenWebseite}
      />
      <Description>
        For the web documentary <i>www.10facetten.ch</i> we had to find an
        online solution, which allows direct access to each of the videoclips
        without forcing a priority between the clips. Therefore we used the
        wellknown slideshow model. To give an easy access to each individual
        film, we decided to use special icons, which relate to the topics. The
        project was implemented in collaboration with <i>www.srsly.ch</i>.
      </Description>
    </Container>
  );
}
