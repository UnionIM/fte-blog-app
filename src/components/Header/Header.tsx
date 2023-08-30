import React from "react";
import logo from "../../images/vector/Logo.svg";
import { logo as logoFontStyle, Typography, Flex } from "../../styles";
import { Button, UserName } from "../";
import { useAppSelector } from "../../hooks/useAppSelector";
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
        {window.location.href.slice(window.location.href.lastIndexOf("/")) !==
        ("/login" || "/sign-up") ? (
          <>
            {user.isAuth ? (
              <UserName user={user} />
            ) : (
              <Flex gap={29} alignItems={"center"}>
                <Button
                  variant={"contained"}
                  color={"blue"}
                  onClick={() => {
                    nav("/sign-up");
                  }}
                >
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
          </>
        ) : (
          <></>
        )}
      </Flex>
    </header>
  );
};

export default Header;
