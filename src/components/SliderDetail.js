import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "../graphics/ArrowLeft";
import ArrowRight from "../graphics/ArrowRight";
import DotFull from "../graphics/DotFull";

const SliderWrapper = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 2.5rem;
`;
const SliderDetailWrapper = styled.div`
  width: 90%;
  margin: auto;

  border-top: 2px solid white;
`;
const Slide = styled.div`
  display: block;
`;

const SlideImg = styled.img`
  height: 318px;
  object-fit: cover;
  object-position: center;
`;

const SlideTitle = styled.h2`
  margin: 6px 0 4px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  text-transform: uppercase;
`;

const SlideSubtitle = styled(SlideTitle)`
  text-transform: none;
  margin: 2rem 0 0;
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

export default function SliderStartpage({ title, subtitle, year, data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: "progressive",
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    customPaging: (i) => <DotFull />,
  };

  return (
    <SliderWrapper>
      <SliderDetailWrapper>
        <SlideTitle>{title}</SlideTitle>
        <SlideYearWrapper>
          <SlideYearPlaceholder />
          <SlideYear>{year}</SlideYear>
        </SlideYearWrapper>
        <Slider {...settings}>
          {data.map((slide) => (
            <Slide key={slide.id}>
              <SlideImg src={slide.src} />
            </Slide>
          ))}
        </Slider>
        <SlideSubtitle>{subtitle}</SlideSubtitle>
      </SliderDetailWrapper>
    </SliderWrapper>
  );
}
