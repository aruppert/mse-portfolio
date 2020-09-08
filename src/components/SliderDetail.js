import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "../graphics/ArrowLeft";
import ArrowRight from "../graphics/ArrowRight";

const SliderWrapper = styled.div`
  width: 100%;
  margin: auto;
  margin: 4rem 0 1rem;
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
  max-width: 100%;
  margin: auto;
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
  margin: 3rem 0 0;
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

export default function SliderStartpage({
  title,
  subtitle,
  year,
  data,
  imagestyle,
}) {
  const settings = {
    infinite: true,
    speed: 500,
    lazyLoad: "progressive",
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
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
              {slide.link ? (
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <SlideImg src={slide.src} />
                </a>
              ) : imagestyle === "contain" ? (
                <SlideImg src={slide.src} style={{ "object-fit": "contain" }} />
              ) : (
                <SlideImg src={slide.src} />
              )}
            </Slide>
          ))}
        </Slider>
        <SlideSubtitle>{subtitle}</SlideSubtitle>
      </SliderDetailWrapper>
    </SliderWrapper>
  );
}
