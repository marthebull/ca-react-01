import React from "react";
import { MessageContainer } from "./styles";
import { Button } from "../../GlobalStyles";
import { Link } from "react-router-dom";

const NotFound = () => {
  console.log("404");
  return (
    <>
      <MessageContainer>
        <h1>Woops! Nothing to see here</h1>
        <Link to="/">
          <Button>Start over </Button>
        </Link>
      </MessageContainer>
    </>
  );
};

export default NotFound;
