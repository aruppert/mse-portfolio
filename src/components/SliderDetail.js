import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "../graphics/ArrowLeft";
import ArrowRight from "../graphics/ArrowRight";
import { mq } from "../components/MediaQueries";

export default function SliderDetail({
  title,
  subtitle,
  year,
  data,
  imagestyle,
  id,
}) {
  const settings = {
    infinite: true,
    speed: 500,
    lazyLoad: "progressive",
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  return (
    <SliderWrapper id={id}>
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

const SliderWrapper = styled.div`
  width: 90%;
  margin: 4rem auto 1rem;
  ${mq("medium")} {
    width: 95%;
    margin: 2em 1em;
  }
`;

const SliderDetailWrapper = styled.div`
  width: 90%;
  border-top: 2px solid var(--dark-pri);
  margin: auto;
`;

const Slide = styled.div`
  display: block;
`;

const SlideImg = styled.img`
  max-width: 100%;
  height: 318px;
  object-fit: cover;
  object-position: center;
  margin: auto;
`;

const SlideTitle = styled.h2`
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 6px 0 4px;
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
  border-top: 0.5px solid var(--dark-pri);
  font-weight: 100;
`;

SliderDetail.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  year: PropTypes.string,
  data: PropTypes.object,
  imagestyle: PropTypes.string,
  id: PropTypes.string,
};
