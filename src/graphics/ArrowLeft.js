import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  fill: ${(props) => props.theme.colors.sec};
  height: 20px;
  position: absolute;
  top: 105%;
  left: 10%;
  z-index: 300;
`;

export default function ArrowLeft(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 203 230.23">
      <path
        d="M251.56,230.44l-152-87.77,152-87.78s13-7.5,5.74-20.06-20.24-5-20.24-5L64.44,129.44s-8.36,4.83-7.92,13.23c-.44,8.39,7.92,13.22,7.92,13.22l172.62,99.67s13,7.5,20.24-5.06S251.56,230.44,251.56,230.44Z"
        transform="translate(-56.5 -27.55)"
      />
    </Svg>
  );
}
