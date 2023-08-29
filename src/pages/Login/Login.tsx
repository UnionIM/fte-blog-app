import React, { FormEvent, useEffect, useState } from "react";
import Typography from "../../styles/components/Typography/Typography";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { h2 } from "../../styles/fonts/h2";
import Box from "../../styles/components/Box/Box";
import { authApi } from "../../service/AuthService";
import Loader from "../../components/UI/Loader/Loader";
import { errorHandler } from "../../service/errorHandler";
import Alert from "../../components/UI/Alert/Alert";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { userSlice } from "../../store/reducers/UserSlicer";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [mutation, { data, isLoading, error }] = authApi.useLoginMutation();

  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutation({ email, password });
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("accessToken", data.accessToken);
      dispatch(setUser(data.user));
    }
  }, [data]);

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
        Welcome back
      </Typography>
      <form onSubmit={handleLoginSubmit}>
        <Input
          placeholder={"Enter your login"}
          borderColor={"blue"}
          setState={setEmail}
          required
          sx={{ display: "block", margin: "0 auto" }}
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

export default Login;
