import React, { useState } from "react";
import { FancyInput, FancyButton, FancyForm } from "@components";
import { auth } from "@services";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (name, value) => {
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const onSubmitHandler = () => {
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FancyForm onSubmit={onSubmitHandler}>
      <h3>LOGIN</h3>
      <FancyInput labelText="Email" name="email" onChange={onChange} />
      <FancyInput
        labelText="Password"
        type="password"
        name="password"
        onChange={onChange}
      />
    </FancyForm>
  );
};

export default LoginPage;
