import React from "react";
import styled from "@emotion/styled";
import ContactSVG from "../graphics/ContactSVG.js";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import ActionIcon from "../graphics/ActionIcon.js";
import { css } from "@emotion/core";

const Container = styled.main`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
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
  min-height: 380px;
  width: 80%;
  margin: 2rem auto 0;
`;

const InputStyles = css`
  background: var(--dark-form);
  color: var(--dark-txt);
  height: 2rem;
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  ::placeholder {
    color: var(--dark-txt);
    opacity: 1;
    font-size: 1rem;
    font-weight: 200;
    padding: 0 0.2rem;
  }
`;

const NameInput = styled.input`
  ${InputStyles};
  border-color: ${(props) => (props.errors.name ? "var(--dark-danger)" : "")};
`;

const MiscInput = styled.input`
  ${InputStyles};
`;

const EmailInput = styled.input`
  ${InputStyles};
  border-color: ${(props) => (props.errors.email ? "var(--dark-danger)" : "")};
`;

const MessageInput = styled.textarea`
  ${InputStyles};
  border-color: ${(props) =>
    props.errors.message ? "var(--dark-danger)" : ""};
  height: 10rem;
  ::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5.5rem;
  border: none;
  background: inherit;
  color: var(--dark-sec);
  font-size: 1.2rem;
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
        <NameInput
          ref={register({
            required: true,
            minLength: 2,
            maxLength: 200,
            pattern: /^[A-Za-z]+$/i,
          })}
          name="name"
          placeholder="Name *"
          errors={errors}
        />
        <MiscInput
          ref={register({ maxLength: 500 })}
          name="subject"
          placeholder="Subject"
          errors={errors}
        />
        <EmailInput
          ref={register({
            required: true,
            validate: (input) => isEmail(input),
          })}
          name="email"
          placeholder="E-Mail *"
          errors={errors}
        />
        <MiscInput
          ref={register({ maxLength: 20 })}
          name="tel"
          placeholder="Telefon"
          errors={errors}
        />
        <MessageInput
          ref={register({ required: true, minLength: 2, maxLength: 10000 })}
          name="message"
          placeholder="Message *"
          errors={errors}
        />
        <SubmitButton type="submit" disabled={formState.isSubmitting}>
          <ActionIcon />
          Send
        </SubmitButton>
      </Form>
    </Container>
  );
}
