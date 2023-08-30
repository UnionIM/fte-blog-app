import React from "react";
import img from "../../images/bitmap/home-page-img.png";
import { h1, h2, Flex, Typography } from "../../styles";
import { Button, PostList, Loader } from "../../components";
import { useAppSelector } from "../../hooks/useAppSelector";
import { StyledImg } from "./index";
import { postApi } from "../../service/PostService";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useAppSelector((state) => state.user);
  const elementToScroll = React.createRef<HTMLDivElement>();

  const { data: posts, isLoading } = postApi.useFetchPostsQuery(4);

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
            {user.isAuth
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
              onClick={user.isAuth ? handleScrollTo : () => {}}
            >
              Let's start
            </Button>
            {user.isAuth ? (
              <Link to={"/posts/create"}>
                <Button variant={"outlined"}>Create new post +</Button>
              </Link>
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
      {posts && <PostList posts={posts} ref={elementToScroll} />}
    </div>
  );
};

export default Home;
