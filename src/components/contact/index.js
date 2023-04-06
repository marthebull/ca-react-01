import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../utils/schema";
import {
  ErrorMsg,
  FormWrapper,
  Input,
  Label,
  Textarea,
  SubmitBtn,
  Form,
  ErrorMsgWrap,
  FormTitle,
} from "./styles";
import { Col } from "../../GlobalStyles";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <FormWrapper>
        <FormTitle>Contact us</FormTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Col>
            <ErrorMsgWrap>
              <Label>Full name:</Label>
              <ErrorMsg>{errors.fullName?.message}</ErrorMsg>
            </ErrorMsgWrap>
            <Input {...register("fullName")} />
          </Col>
          <Col>
            <ErrorMsgWrap>
              <Label>Email:</Label>
              <ErrorMsg>{errors.email?.message}</ErrorMsg>
            </ErrorMsgWrap>
            <Input type="email" {...register("email")} />
          </Col>
          <Col>
            <ErrorMsgWrap>
              <Label>Subject:</Label>
              <ErrorMsg>{errors.subject?.message}</ErrorMsg>
            </ErrorMsgWrap>
            <Input type="subject" {...register("subject")} />
          </Col>
          <Col>
            <ErrorMsgWrap>
              <Label>Message: </Label>
              <ErrorMsg> {errors.body?.message}</ErrorMsg>
            </ErrorMsgWrap>
            <Textarea rows="4" type="body" {...register("body")} />
          </Col>
          <SubmitBtn type="submit">SEND MESSAGE</SubmitBtn>
        </Form>
      </FormWrapper>
    </>
  );
};

export default ContactForm;
