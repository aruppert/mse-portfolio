import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "../graphics/ArrowLeft";
import ArrowRight from "../graphics/ArrowRight";
import DotFull from "../graphics/DotFull";

const SliderWrapper = styled.div`
  width: 320px;
  margin: auto;
  margin-top: 32px;
`;

const Slide = styled.div`
  border-top: 2px solid white;
  display: flex;
`;

const SlideImg = styled.img`
  height: 318px;
`;

const SlideTitle = styled.h2`
  margin: 6px 0 4px;
  font-size: 1.2rem;
  line-height: 1.4rem;
  height: 2.8rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const SlideYearWrapper = styled.div`
  display: flex;
  margin: 0 0 10px;
`;
const SlideYearPlaceholder = styled.div`
  flex-grow: 1;
`;
const SlideYear = styled.aside`
  width: fit-content;
  font-weight: 100;
  border-top: 0.5px solid white;
`;

const SlideLabel = styled.label`
  width: 100%;
`;

export default function SliderStartpage() {
  const settings = {
    infinite: true,
    speed: 500,
    lazyLoad: "progressive",
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  const slidesData = [
    {
      id: 1,
      title: "Final Thesis (Bachelor Degree)",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/vimeo/c_fill,g_face:auto,q_100,w_450/https://vimeo.com/135182937",
      year: "2015",
      label: "Concept. UX/UI. Graphic Design. Videography. Content.",
    },
    {
      id: 2,
      title: "Fashion Photography",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731715/Webseite/Work/Photography/Fasion/02_Fashion_myd3ie.jpg",
      year: "2013",
      label: "Photography. Lighting. Location Scouting. Concept.",
    },
    {
      id: 3,
      title: "Social Media Content (probonoTV)",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/youtube/c_fill,g_face:auto,q_100,w_450/https://youtu.be/94mosRYYod0",
      year: "2016",
      label: "Illustration. Graphic Design. Concept. Videography. Animation.",
    },
    {
      id: 4,
      title: "Can't touch this",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/vimeo/c_fill,g_face:auto,q_100,w_450/https://vimeo.com/144620833",
      year: "2014",
      label: "Design Research, Concept, UX, Arduino Coding, Content",
    },
    {
      id: 5,
      title: "Lightpainting Photography",
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731993/Webseite/Work/Photography/%27LightPainting/05_Lightpeinting_Leerraum_ewri05.jpg",
      year: "2013",
      label:
        "Concept, Location Scouting, Photography, Lightpainting, Directing (Choreography), Color Grading",
    },
  ];

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <Slide key={slide.id}>
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideYearWrapper>
              <SlideYearPlaceholder />
              <SlideYear>{slide.year}</SlideYear>
            </SlideYearWrapper>
            <SlideImg src={slide.src} />
            <SlideLabel>{slide.label}</SlideLabel>
          </Slide>
        ))}
      </Slider>
    </SliderWrapper>
  );
}
