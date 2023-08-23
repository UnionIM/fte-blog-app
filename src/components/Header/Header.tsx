import React, { useEffect, useState } from "react";
import logo from "../../images/vector/Logo.svg";
import { logo as logoFontStyle, Typography, Flex } from "../../styles";
import { Button, UserName } from "../";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Link, useNavigate } from "react-router-dom";
import { TUser } from "../../models/TUser";

const Header = () => {
  const nav = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const [isAuth, setIsAuth] = useState<TUser | false>(false);

  useEffect(() => {
    if (Object.values(user).length) {
      setIsAuth(user);
    }
  }, [user]);

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
          <></>
        </Flex>
        {window.location.href.slice(window.location.href.lastIndexOf("/")) !==
        ("/login" || "/sign-up") ? (
          <>
            {isAuth ? (
              <UserName user={isAuth} />
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
