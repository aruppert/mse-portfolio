import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
`;

const Teaser = styled.p`
  width: 90%;
  padding: 0 16%;
  margin: 1rem auto 0;
  font-size: 18px;
  line-height: 20px;
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
  width: 90%;
  margin: 1rem 0;
`;

export { Container, Teaser, Description, SVGWrapper };
