import styled from "@emotion/styled";
import { mq } from "../components/MediaQueries";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
  ${mq("medium")} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`;

const SectionWrapper = styled.section`
  max-width: 23em;
  margin: auto;
  ${mq("medium")} {
    height: 100%;
  }
`;

const Teaser = styled.p`
  width: 80%;
  padding: 0 0 0 5%;
  margin: 1em auto 0;
  font-size: 1.125em;
  line-height: 1.25em ${mq("medium")} {
    padding: 2em 0 0 5%;
  }
`;
const Description = styled.p`
  width: 90%;
  padding: 0 1rem;
  margin: 1.5rem auto 0;
`;

const SVGWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export { Container, Teaser, Description, SVGWrapper, SectionWrapper };
