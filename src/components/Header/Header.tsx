import React, { useEffect, useState } from "react";
import logo from "../../images/vector/Logo.svg";
import { logo as logoFontStyle } from "../../styles/fonts/logo";
import Typography from "../../styles/components/Typography/Typography";
import Flex from "../../styles/components/Flex/Flex";
import Button from "../UI/Button/Button";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Avatar, ImgAvatar } from "./index";
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
        {isAuth ? (
          <Flex gap={11} alignItems={"center"}>
            {isAuth.avatar ? (
              <ImgAvatar
                src={isAuth.avatar}
                alt={isAuth.name && isAuth.name[0]}
              />
            ) : (
              <Avatar>{isAuth.name && isAuth.name[0]}</Avatar>
            )}
            <Typography>{isAuth.name || "user"}</Typography>
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