import React, { FormEvent, useState } from "react";
import { authApi } from "../../service/AuthService";
import { h2, Box, Typography } from "../../styles";
import { Input, Button, Loader, Alert } from "../../components";
import { errorHandler } from "../../service/utils/errorHandler";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [mutation, { isLoading, error }] = authApi.useSignUpMutation();

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutation({ email, password, name });
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography
        styles={h2}
        sx={{ margin: "0 0 50px 0", textAlign: "center" }}
      >
        Welcome!
      </Typography>
      <form onSubmit={handleLoginSubmit}>
        <Input
          placeholder={"Enter your name"}
          borderColor={"blue"}
          setState={setName}
          required
          sx={{ display: "block", margin: "0 auto" }}
          value={name}
        ></Input>
        <Input
          placeholder={"Enter your login"}
          borderColor={"blue"}
          setState={setEmail}
          required
          sx={{ display: "block", margin: "16px auto" }}
          value={email}
        ></Input>
        <Input
          placeholder={"Enter your password"}
          borderColor={"blue"}
          setState={setPassword}
          type={"password"}
          required
          sx={{ display: "block", margin: "16px auto 50px" }}
          value={password}
        ></Input>
        <Button
          variant={"contained"}
          type={"submit"}
          sx={{
            display: "block",
            margin: "0 auto",
            width: "88px",
          }}
        >
          {isLoading ? <Loader color={"white"} size={6} /> : "Login"}
        </Button>
        {error && (
          <Alert
            sx={{ margin: "15px 0 0 0" }}
            message={errorHandler(error)?.message || "Unknown error"}
          />
        )}
      </form>
    </Box>
  );
};

export default SignUp;
