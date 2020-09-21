import React from "react";
import styled from "@emotion/styled";
import ContactSVG from "../graphics/ContactSVG.js";

const Container = styled.main`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  height: 80vh;
`;

const Name = styled.h1`
  padding: 0 3rem;
  font-weight: 200;
  font-size: 1.2rem;
`;

const ContactDetails = styled.p`
  width: 100%;
  margin: 0.3rem 0;
  padding: 0 3rem;
  a {
    color: #fff;
  }
`;

const ContactSVGstyled = styled(ContactSVG)`
  align-self: flex-end;
  margin: 3rem 1.5rem 1.7rem 0;
`;

export default function Contact() {
  return (
    <Container>
      <ContactSVGstyled />
      <Name>Miriam Exner</Name>
      <ContactDetails>M. 0178 764 16 68</ContactDetails>
      <ContactDetails>
        E.{" "}
        <a href="mailto:exner.miriam@gmail.com" type="email">
          exner.miriam@gmail.com
        </a>
      </ContactDetails>
    </Container>
  );
}
