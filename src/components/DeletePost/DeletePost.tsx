import React, { Dispatch, FC, SetStateAction } from "react";
import Modal from "../UI/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { Colors, Flex, h3, Typography } from "../../styles";
import { Alert, Button, Loader } from "../index";
import { postApi } from "../../service/PostService";
import { errorHandler } from "../../service/utils/errorHandler";

interface IDeletePost {
  postTitle: string;
  postId: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const DeletePost: FC<IDeletePost> = ({ postId, postTitle, setIsModalOpen }) => {
  const nav = useNavigate();
  const [mutation, { isLoading, error }] = postApi.useDeletePostMutation();

  const deleteHandler = async () => {
    const response = await mutation({ postId });
    if (!("error" in response)) {
      nav("/");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal onClose={closeModal}>
      <Typography styles={{ ...h3, color: Colors.red }}>
        Delete post "{postTitle}"
      </Typography>
      <Typography sx={{ margin: "40px 0", textAlign: "center" }}>
        Are you sure you want to delete post "{postTitle}"?
      </Typography>
      {error && (
        <Alert
          sx={{ margin: "0 0 40px 0" }}
          message={errorHandler(error)?.message || "Unknown message"}
        />
      )}
      <Flex justifyContent={"center"} gap={10}>
        <Button variant={"outlined"} color={"red"} onClick={closeModal}>
          Cancel
        </Button>
        <Button variant={"contained"} color={"green"} onClick={deleteHandler}>
          {isLoading ? <Loader color={"white"} size={6} /> : "Apply"}
        </Button>
      </Flex>
    </Modal>
  );
};

export default DeletePost;
