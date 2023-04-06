import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const Wrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
  margin: 40px auto;
`;

export const GoHomeBtn = styled(Button)`
  margin: 20px auto;
`;
