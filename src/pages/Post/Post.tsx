import React from "react";
import { useParams } from "react-router-dom";
import { postApi } from "../../service/PostService";
import Loader from "../../components/UI/Loader/Loader";
import { Colors } from "../../styles/colors";
import { errorHandler } from "../../service/utils/errorHandler";
import Flex from "../../styles/components/Flex/Flex";
import Box from "../../styles/components/Box/Box";
import Typography from "../../styles/components/Typography/Typography";
import { h3 } from "../../styles/fonts/h3";
import UserName from "../../components/UserName/UserName";
import dayjs from "dayjs";
import Star from "../../styles/components/Star";
import Rating from "react-rating";
import Alert from "../../components/UI/Alert/Alert";

const Post = () => {
  const { postId } = useParams();
  const {
    data: post,
    isLoading,
    error,
  } = postApi.useGetPostQuery(postId || "");

  return (
    <div>
      {isLoading && <Loader color={Colors.blue} />}
      {error && (
        <Alert message={errorHandler(error)?.message || "Unknown error"} />
      )}
      {post && (
        <Box sx={{ padding: "80px 200px" }}>
          <Flex gap={20}>
            {post.image ? (
              <img
                src={post.image}
                alt={post.id}
                style={{
                  width: "100%",
                  height: "200px",
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "500px",
                  height: "300px",
                  backgroundColor: "gray",
                }}
              />
            )}
            <Flex flexDirection={"column"} gap={14}>
              <Typography styles={h3}>{post.title}</Typography>
              <UserName user={post.author} />
              <Typography>{`Created at: ${dayjs(post.createdAt).format(
                "HH:mm, DD MMM YYYY",
              )}`}</Typography>
              <Rating
                readonly
                initialRating={parseInt(post.rating)}
                fullSymbol={<Star filled />}
                emptySymbol={<Star />}
              />
            </Flex>
          </Flex>
          <Typography sx={{ margin: "30px 0 0 0" }}>
            {post.description}
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default Post;
