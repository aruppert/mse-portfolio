import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  fill: ${(props) => props.theme.colors.sec};
  height: 20px;
`;

export default function ThisIsME(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 203 230.23">
      <path
        d="M69.63,54.89l152,87.78-152,87.77s-13,7.5-5.74,20.06,20.24,5.06,20.24,5.06l172.62-99.67s8.36-4.83,7.92-13.22c.44-8.4-7.92-13.23-7.92-13.23L84.13,29.78s-13-7.5-20.24,5S69.63,54.89,69.63,54.89Z"
        transform="translate(-61.69 -27.55)"
      />
    </Svg>
  );
}
