import React from "react";
import CardWrapper from "./card-wrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      backButtomLabel="don't have any account"
      cardLabel="Login"
      backButtonHref="/auth/register"
      showSocial={true}
    >
      <div>LoginForm</div>
    </CardWrapper>
  );
}
