import React from "react";
import { useParams } from "react-router-dom";
import { postApi } from "../../service/PostService";
import { Loader, UserName, Alert } from "../../components";
import { Star, Colors, Flex, Box, Typography, h3 } from "../../styles";
import { errorHandler } from "../../service/utils/errorHandler";
import dayjs from "dayjs";
import Rating from "react-rating";

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
