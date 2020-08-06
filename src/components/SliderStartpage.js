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
  font-size: 18px;
  line-height: 22px;
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
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: "progressive",
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    customPaging: (i) => <DotFull />,
  };

  const slidesData = [
    {
      id: 1,
      title: "repellendus id ullam",
      year: "2020",
      label: "Dolorem officiis temporibus.",
    },
    {
      id: 2,
      title: "excepturi consequatur est",
      year: "2020",
      label: "Officia non provident dolor esse et neque.",
    },
    {
      id: 3,
      title: "excepturi consequatur est",
      year: "2020",
      label: "Officia non provident dolor esse et neque.",
    },
    {
      id: 4,
      title: "excepturi consequatur est",
      year: "2020",
      label: "Officia non provident dolor esse et neque.",
    },
    {
      id: 5,
      title: "excepturi consequatur est",
      year: "2020",
      label: "Officia non provident dolor esse et neque.",
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
            <SlideImg src={require(`../../public/images/${slide.id}.jpg`)} />
            <SlideLabel>{slide.label}</SlideLabel>
          </Slide>
        ))}
      </Slider>
    </SliderWrapper>
  );
}
