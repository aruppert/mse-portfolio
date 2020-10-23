import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "../graphics/ArrowLeft";
import ArrowRight from "../graphics/ArrowRight";
import StartPageData from "../content-data/StartPageData";
import { HashLink as Link } from "react-router-hash-link";
import { mq } from "../components/MediaQueries";

const SliderWrapper = styled.div`
  width: 20em;
  margin: auto;
  margin-top: 2em;
  align-self: center;
  ${mq("medium")} {
    margin: 3em 0 0;
  }
`;

const Slide = styled.div`
  border-top: 2px solid white;
  display: flex;
`;

const SlideImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const SlideImg = styled.img`
  max-width: fit-content;
  height: 20em;
`;

const SlideTitleWrapper = styled.h2`
  margin: 6px 0 4px;
  font-size: 1.2rem;
  line-height: 1.4rem;
  height: 2.8rem;
`;
const SlideTitle = styled(Link)`
  text-decoration: none;
  color: var(--dark-sec);
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
  display: flex;
  height: 4em;
  width: 100%;
  align-items: center;
`;

export default function SliderStartpage() {
  const settings = {
    infinite: true,
    speed: 500,
    lazyLoad: "progressive",
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {StartPageData.map((slide) => (
          <Slide key={slide.id}>
            <SlideTitleWrapper>
              <SlideTitle
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "center" })
                }
                to={slide.path}
              >
                {slide.title}
              </SlideTitle>
            </SlideTitleWrapper>
            <SlideYearWrapper>
              <SlideYearPlaceholder />
              <SlideYear>{slide.year}</SlideYear>
            </SlideYearWrapper>
            <SlideImgWrapper>
              {slide.link ? (
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <SlideImg src={slide.src} />
                </a>
              ) : (
                <SlideImg src={slide.src} />
              )}
            </SlideImgWrapper>
            <SlideLabel>{slide.label}</SlideLabel>
          </Slide>
        ))}
      </Slider>
    </SliderWrapper>
  );
}
