import React, { useEffect } from "react";
import styled from "@emotion/styled";
import SliderDetail from "../components/SliderDetail";
import Videography from "../graphics/Videography.js";

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

const VideoLink = styled.a`
  color: ${(props) => props.theme.colors.sec};
  display: block;
`;

export default function DetailVideo() {
  const probonoTV = [
    {
      id: 1,
      link: "https://youtu.be/HoVhOiCEKr8",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/youtube/c_fill,g_face:auto,q_100,w_450/https://youtu.be/HoVhOiCEKr8",
    },
    {
      id: 2,
      link: "https://youtu.be/94mosRYYod0",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/youtube/c_fill,g_face:auto,q_100,w_450/https://youtu.be/94mosRYYod0",
    },
    {
      id: 3,
      link: "https://youtu.be/Nl8iW7zxteg",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/youtube/c_fill,g_face:auto,q_100,w_450/https://youtu.be/Nl8iW7zxteg",
    },
    {
      id: 4,
      link: "https://youtu.be/Kw9yrbJLsDI",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/youtube/c_fill,g_face:auto,q_100,w_450/https://youtu.be/Kw9yrbJLsDI",
    },
  ];
  const wheelOfBelieves = [
    {
      id: 1,
      link: "https://vimeo.com/135182937",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/vimeo/c_fill,g_face:auto,q_100,w_450/https://vimeo.com/135182937",
    },
  ];
  const zehnFacetten = [
    {
      id: 1,
      link: "https://vimeo.com/114900510",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/vimeo/c_fill,g_face:auto,q_100,w_450/https://vimeo.com/114900510",
    },
    {
      id: 2,
      link: "https://youtu.be/RU5gpvfFR1Y",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/youtube/c_fill,g_face:auto,q_100,w_450/https://youtu.be/RU5gpvfFR1Y",
    },
  ];
  const ZFF = [
    {
      id: 0,
      link: "https://youtu.be/iSOk8zzSohw",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/youtube/c_fill,g_face:auto,q_100,w_450/https://youtu.be/iSOk8zzSohw",
    },
    {
      id: 1,
      link: "https://vimeo.com/144621827",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/vimeo/c_fill,g_face:auto,q_100,w_450/https://vimeo.com/144621827",
    },
  ];
  const lichtfaktor = [
    {
      id: 1,
      link: "https://vimeo.com/92716102",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/vimeo/c_fill,g_face:auto,q_100,w_450/https://vimeo.com/92716102",
    },
    {
      id: 2,
      link: "https://vimeo.com/135347318",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/vimeo/c_fill,g_face:auto,q_100,w_450/https://vimeo.com/135347318",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <SVGWrapper>
        <Videography />
      </SVGWrapper>
      <Teaser>
        The beauty of videography is the mixture of skills that need to be
        combined to let the moving picture shine. A subtle change of light or
        sound can make the difference.
      </Teaser>
      <SliderDetail
        title="Social Media Content for probono TV"
        subtitle="Videoshoot. Post Production. Animation. Graphics. CI. Social Media. Color Grading. Image Processing."
        year="2016"
        data={probonoTV}
      />
      <Description>
        Here are just a few examples. For more visit:{" "}
        <VideoLink
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCU6KG-xVGVyS6_nVKPtTKMA"
        >
          Probono TV Youtube-Channel
        </VideoLink>
        One of my tasks during my time at probono TV-media-production was to
        brand and co-produce the weekly online magazin. I did so by creating
        pencil-style title-images and animations. An additional task was to
        transfer daily political topics into understandable and meaningful
        graphics and animations. Sadly, after my contract ended after nine
        month, they did not continue to use my CI. In total these works are
        team-efforts, which do not always reflect my opinions, but it is an
        on-going trial to make journalism great again. ;)
      </Description>
      <SliderDetail
        title="The Wheel of Believes (Documentary Content)"
        subtitle="Video Shoot. Sound. Lighting. Interviews. Directing. Post Production. Animation. Graphics."
        year="2015"
        data={wheelOfBelieves}
      />
      <Description>
        For my Final Thesis I produced a draft for a webdocumentary concerning
        the question "What is religious believe?" and “Where are similarities
        between religions?” To give an insight how the content could be
        arranged, I produced some videos showing the daily life and rituals of
        the turkish-islamic Community in Cologne.
        <VideoLink
          target="_blank"
          rel="noreferrer"
          href="https://vimeo.com/135182937"
        >
          Here you find a summary.
        </VideoLink>{" "}
        If you want to see more, please contact me.
      </Description>
      <SliderDetail
        title="10 Facetten (Documentary Content)"
        subtitle="Video Shoot. Sound. Lighting. Interviews. Directing. Post Production."
        year="2014"
        data={zehnFacetten}
      />
      <Description>
        During my studies at ZHDK in Switzerland we produced a webdocumentary
        concerning different forms of passionate living throughout Switzerland.
        Each student had to produce two videoclips in cooperation with one other
        student. Our first video is about Shibari - a japanese form of artistic
        bondage. The second clip shows the life of the people living and praying
        in the Zurich based Hare Krishna Temple. Have a look at the complete
        documentary at
        <VideoLink
          target="_blank"
          rel="noreferrer noopener"
          href="https://10facetten.ch/"
        >
          www.10facetten.ch.
        </VideoLink>
      </Description>
      <SliderDetail
        title="ZFF daily 2014 Youtube channel"
        subtitle="Video Shoot. Post Production. Interviews."
        year="2016"
        data={ZFF}
      />
      <Description>
        During the Zurich Film Festival 2014 the students of the CAST-program at
        ZHDK (Züricher Hochschule der Künste) had the opportunity to create
        content for an official Youtube-Channel of the festival. During this
        project I got the chance to interview Zach Braff, better known as JD
        from the TV-series “Scrubs”, about his movie “I wish I was here”. We
        also edited a clip giving the viewers an impression what is going on at
        the festival centre midtown. If you want to see more have look here:
        <VideoLink
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.youtube.com/playlist?list=PLayrw-0c9mOa4tJbi8HRgRRoXYUEJs1ao"
        >
          ZFF daily 2014 Youtube-Playlist
        </VideoLink>
      </Description>
      <SliderDetail
        title="Lightpainting Stopp-Trick-Editing (Lichtfaktor)"
        subtitle="Postproduction. Colorgrading."
        year="2014"
        data={lichtfaktor}
      />
      <Description>
        During my time as a freelancer working for the creative agency
        "Lichtfaktor" I edited some of their Light-Painting-Stop-Trick-Videos.
        Here are some examples. For more work of this great crew have a look
        here:
        <VideoLink
          href="https://www.lichtfaktor.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          www.lichtfaktor.com
        </VideoLink>
      </Description>
    </Container>
  );
}
