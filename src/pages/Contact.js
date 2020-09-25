import React from "react";
import styled from "@emotion/styled";
import ContactSVG from "../graphics/ContactSVG.js";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

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
  width: 90%;
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

const Form = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: 500px;
  width: 90%;
  margin: 2rem auto 0;
`;
export default function Contact() {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register({
            required: true,
            minLength: 2,
            maxLength: 200,
            pattern: /^[A-Za-z]+$/i,
          })}
          name="name"
          placeholder="Name*"
        />
        <input
          ref={register({ maxLength: 500 })}
          name="subject"
          placeholder="Subject"
        />
        <input
          ref={register({
            required: true,
            validate: (input) => isEmail(input),
          })}
          style={{ borderColor: errors.email && "red" }}
          name="email"
          placeholder="E-Mail*"
        />
        <input
          ref={register({ maxLength: 20 })}
          name="tel"
          placeholder="Telefon"
        />
        <input
          ref={register({ required: true, minLength: 10, maxLength: 10000 })}
          name="message"
          placeholder="Message*"
        />
        <button type="submit" disabled={formState.isSubmitting}>
          Send
        </button>
      </Form>
    </Container>
  );
}
