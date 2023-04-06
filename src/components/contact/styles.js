import styled from "styled-components";
import { Button, Container, Row, Title } from "../../GlobalStyles";

export const FormWrapper = styled(Container)`
  min-height: 60vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const FormTitle = styled(Title)`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  max-width: 600px;
  min-width: 340px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  margin-right: 10px;
  line-height: 1.5rem;
`;

export const ErrorMsgWrap = styled(Row)`
  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const ErrorMsg = styled.span`
  color: blue;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
`;

export const SubmitBtn = styled(Button)`
  margin-left: auto;
  margin-right: auto;
`;
