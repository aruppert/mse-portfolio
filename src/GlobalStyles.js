import React from "react";
import { Global, css } from "@emotion/core";
import { mq } from "../src/components/MediaQueries";

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          height: 100%;
          font-size: 1em;
          ${mq("medium")} {
            font-size: 1.25em;
          }
          margin: 0;
          background: ${theme.colors.bg};
          color: ${theme.colors.txt};
          font-family: "Montserrat", sans-serif, "Abril Fatface", cursive;
        }
        #root {
          height: 100%;
          --dark-bg: #231d24;
          --dark-txt: #fff;
          --dark-pri: #fff;
          --dark-sec: #55f297;
          --dark-danger: #f26055;
          --dark-form: rgba(255, 255, 255, 0.5);
        }
      `}
    />
  );
}

export default GlobalStyles;
