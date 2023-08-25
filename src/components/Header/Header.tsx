import React from "react";
import logo from "../../images/vector/Logo.svg";
import { logo as logoFontStyle } from "../../styles/fonts/logo";
import Typography from "../../styles/components/Typography/Typography";
import Flex from "../../styles/components/Flex/Flex";
import Button from "../UI/Button/Button";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Avatar, ImgAvatar } from "./index";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  return (
    <header>
      <Flex
        justifyContent={"space-between"}
        sx={{ width: "80%", height: "72px" }}
        margin={"0 auto"}
      >
        <Flex alignItems={"center"}>
          <Link to={"/"}>
            <Flex alignItems={"center"} gap={7}>
              <img src={logo} alt="" />
              <Typography styles={logoFontStyle}>Blog App</Typography>
            </Flex>
          </Link>
        </Flex>
        {user.isAuth ? (
          <Flex gap={11} alignItems={"center"}>
            {user.avatar ? (
              <ImgAvatar src={user.avatar} alt={user.name && user.name[0]} />
            ) : (
              <Avatar>{user.name && user.name[0]}</Avatar>
            )}
            <Typography>{user.name || "user"}</Typography>
          </Flex>
        ) : (
          <Flex gap={29} alignItems={"center"}>
            <Button variant={"contained"} color={"blue"}>
              Sign up
            </Button>
            <Button
              variant={"outlined"}
              color={"blue"}
              onClick={() => {
                nav("/login");
              }}
            >
              Login
            </Button>
          </Flex>
        )}
      </Flex>
    </header>
  );
};

export default Header;
