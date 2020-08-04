import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  fill: ${(props) => props.theme.colors.sec};
  height: 20px;
`;

export default function DotBorder(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 136.5 136.5"
    >
      <path
        d="M145.68,81.75A68.25,68.25,0,1,0,213.93,150,68.25,68.25,0,0,0,145.68,81.75Zm0,124.72A56.47,56.47,0,1,1,202.15,150,56.47,56.47,0,0,1,145.68,206.47Z"
        transform="translate(-77.43 -81.75)"
      />
    </Svg>
  );
}
