import React from "react";
import styled from "@emotion/styled";
import ContactSVG from "../graphics/ContactSVG.js";
import ActionIcon from "../graphics/ActionIcon.js";
import { css } from "@emotion/core";
import axios from "axios";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

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

const ResultMessage = styled.p`
  width: 80%;
  margin: 2rem auto;
`;
export default function Contact() {
  const { register, errors } = useForm({
    mode: "onBlur",
  });
  const [state, setState] = React.useState({
    email: "",
    message: "",
    name: "",
    subject: "",
    tel: "",
  });
  const [result, setResult] = React.useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/send", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          name: "",
          email: "",
          subject: "",
          message: "",
          tel: "",
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later",
        });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
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
      {result && <ResultMessage>{result.message}</ResultMessage>}
      <Form onSubmit={sendEmail}>
        <NameInput
          ref={register({
            required: true,
            minLength: 2,
            maxLength: 200,
          })}
          type="text"
          name="name"
          value={state.name}
          placeholder="Name *"
          errors={errors}
          onChange={onInputChange}
        />
        <MiscInput
          type="text"
          name="subject"
          value={state.subject}
          placeholder="Subject"
          onChange={onInputChange}
        />
        <EmailInput
          ref={register({
            required: true,
            validate: (input) => isEmail(input),
          })}
          type="email"
          name="email"
          value={state.email}
          placeholder="E-Mail *"
          errors={errors}
          onChange={onInputChange}
        />
        <MiscInput
          name="tel"
          placeholder="Telefon"
          value={state.tel}
          onChange={onInputChange}
        />
        <MessageInput
          ref={register({ required: true, minLength: 2, maxLength: 10000 })}
          name="message"
          placeholder="Message *"
          errors={errors}
          value={state.message}
          onChange={onInputChange}
        />
        <SubmitButton type="submit">
          <ActionIcon />
          Send
        </SubmitButton>
      </Form>
    </Container>
  );
}
