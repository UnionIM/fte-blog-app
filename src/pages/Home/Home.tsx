import React, { useEffect, useRef, useState } from "react";
import Flex from "../../styles/components/Flex/Flex";
import img from "../../images/bitmap/home-page-img.png";
import Typography from "../../styles/components/Typography/Typography";
import { h1 } from "../../styles/fonts/h1";
import Button from "../../components/UI/Button/Button";
import PostList from "../../components/PostList/PostList";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TUser } from "../../models/TUser";
import { StyledImg } from "./index";
import { postApi } from "../../service/PostService";
import { h2 } from "../../styles/fonts/h2";
import Loader from "../../components/UI/Loader/Loader";

const Home = () => {
  const { user } = useAppSelector((state) => state.user);
  const elementToScroll = useRef<HTMLDivElement>(null);
  const [isAuth, setIsAuth] = useState<TUser | false>(false);

  const { data: posts, isLoading } = postApi.useFetchPostsQuery(4);

  useEffect(() => {
    if (Object.values(user).length) {
      setIsAuth(user);
    }
  }, [user]);

  const handleScrollTo = () => {
    if (elementToScroll) {
      elementToScroll.current?.scrollIntoView();
    }
  };
  return (
    <div>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ padding: "120px 150px" }}
      >
        <div>
          <Typography styles={h1}>
            {isAuth
              ? "Are you ready to read something new?"
              : "Welcome to BlogApp!"}
          </Typography>
          <Typography
            styles={{ color: "black" }}
            sx={{ margin: "30px 0", maxWidth: "700px" }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit essecillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
          <Flex gap={11}>
            <Button
              variant={"contained"}
              onClick={isAuth ? handleScrollTo : () => {}}
            >
              Let's start
            </Button>
            {isAuth ? (
              <Button variant={"outlined"}>Create new post +</Button>
            ) : (
              <Button variant={"outlined"} onClick={handleScrollTo}>
                Posts
              </Button>
            )}
          </Flex>
        </div>
        <StyledImg src={img} alt="BLOG" />
      </Flex>
      <Typography
        styles={h2}
        sx={{ textAlign: "center", margin: "0 0 70px 0" }}
      >
        Posts
      </Typography>
      {isLoading && <Loader />}
      {posts && <PostList posts={posts} elementRef={elementToScroll} />}
    </div>
  );
};

export default Home;
