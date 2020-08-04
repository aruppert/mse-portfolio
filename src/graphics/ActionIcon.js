import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  fill: ${(props) => props.theme.colors.sec};
  height: 20px;
`;

export default function ActionIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 259.5 259.5"
      {...props}
    >
      <path
        d="M216.6,134.9,111,73.92S103,69.34,98.6,77s3.51,12.27,3.51,12.27l93,53.7-93,53.7S94.17,201.28,98.6,209,111,212.06,111,212.06l105.62-61s5.11-3,4.84-8.09C221.71,137.86,216.6,134.9,216.6,134.9Z"
        transform="translate(-17.6 -13.24)"
      />
      <path
        d="M147.35,13.24A129.75,129.75,0,1,0,277.1,143,129.76,129.76,0,0,0,147.35,13.24Zm0,237.11A107.36,107.36,0,1,1,254.71,143,107.36,107.36,0,0,1,147.35,250.35Z"
        transform="translate(-17.6 -13.24)"
      />
    </Svg>
  );
}
