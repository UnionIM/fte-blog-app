import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postApi } from "../../service/PostService";
import { Loader, UserName, Alert, Button } from "../../components";
import { Star, Flex, Box, Typography, h3 } from "../../styles";
import { errorHandler } from "../../service/utils/errorHandler";
import dayjs from "dayjs";
import Rating from "react-rating";
import { useAppSelector } from "../../hooks/useAppSelector";
import EditPost from "../../components/EditPost/EditPost";
import DeletePost from "../../components/DeletePost/DeletePost";

const Post = () => {
  const { postId } = useParams();
  const { user } = useAppSelector((state) => state.user);
  const {
    data: post,
    isLoading,
    error,
  } = postApi.useGetPostQuery(postId || "");

  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const postEditHandler = () => {
    setIsEditOpen(true);
  };
  const postDeleteHandler = async () => {
    setIsDeleteOpen(true);
  };

  return (
    <div>
      {isLoading && (
        <Flex
          sx={{ height: "100vh" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Loader />
        </Flex>
      )}
      {error && (
        <Alert message={errorHandler(error)?.message || "Unknown error"} />
      )}
      {post && (
        <Box sx={{ padding: "80px 200px" }}>
          <Flex gap={20}>
            {post.image ? (
              <img
                src={`${process.env.REACT_APP_API_URL}/static${post.image}`}
                alt={post.id}
                style={{ maxHeight: "300px" }}
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
              <Typography>
                Created at: {dayjs(post.createdAt).format("HH:mm, DD MMM YYYY")}
              </Typography>
              <Rating
                readonly
                initialRating={parseInt(post.rating)}
                fullSymbol={<Star filled />}
                emptySymbol={<Star />}
              />
              {user.id === post.author.id ? (
                <Flex gap={10}>
                  <Button
                    variant={"contained"}
                    color={"yellow"}
                    onClick={postEditHandler}
                  >
                    Edit
                  </Button>
                  <Button
                    variant={"outlined"}
                    color={"yellow"}
                    onClick={postDeleteHandler}
                  >
                    Delete
                  </Button>
                </Flex>
              ) : (
                <></>
              )}
            </Flex>
          </Flex>
          <Typography sx={{ margin: "30px 0 0 0" }}>
            {post.description}
          </Typography>
          {isDeleteOpen && (
            <DeletePost
              postTitle={post.title}
              postId={post.id}
              setIsModalOpen={setIsDeleteOpen}
            />
          )}
          {isEditOpen && (
            <EditPost postToEdit={post} setIsModalOpen={setIsEditOpen} />
          )}
        </Box>
      )}
    </div>
  );
};

export default Post;
