import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import Modal from "../UI/Modal/Modal";
import { IPostData } from "../../models/IPost";
import { Alert, Button, Input, Loader } from "../";
import { Flex, h3, smallGray, Typography } from "../../styles";
import DropZone from "../DropZone/DropZone";
import { postApi } from "../../service/PostService";
import { errorHandler } from "../../service/utils/errorHandler";

interface IEditPost {
  postToEdit: IPostData;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const EditPost: FC<IEditPost> = ({ postToEdit, setIsModalOpen }) => {
  const [file, setFile] = useState<Blob[]>([]);
  const [title, setTitle] = useState<string>(postToEdit.title);
  const [description, setDescription] = useState<string>(
    postToEdit.description,
  );

  const [mutation, { isLoading, error }] = postApi.useUpdatePostMutation();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await mutation({
      postId: postToEdit.id,
      title: title,
      description: description,
      authorId: postToEdit.author.id,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal onClose={closeModal}>
      <Typography styles={h3} sx={{ margin: "0 0 22px 0" }}>
        Post editing
      </Typography>
      {postToEdit.image ? (
        <DropZone file={file} setFile={setFile} img={postToEdit.image} />
      ) : (
        <DropZone file={file} setFile={setFile} />
      )}
      <form onSubmit={handleFormSubmit}>
        <Typography styles={smallGray} sx={{ margin: "35px 0 0 0" }}>
          Title
        </Typography>
        <Input
          required
          setState={setTitle}
          sx={{ width: "100%" }}
          value={title}
        />
        <Typography styles={smallGray} sx={{ margin: "16px 0 0 0" }}>
          Description
        </Typography>
        <Input
          required
          multiline
          setState={setDescription}
          sx={{ width: "100%" }}
          rows={4}
          value={description}
        />
        {error && (
          <Alert
            sx={{ margin: "18px 0 0 0" }}
            message={errorHandler(error)?.message || "Unknown message"}
          />
        )}
        <Flex
          sx={{ margin: "18px 0 0 0" }}
          gap={10}
          justifyContent={"flex-end"}
        >
          <Button variant={"outlined"} color={"red"} onClick={closeModal}>
            Cancel
          </Button>
          <Button type={"submit"} variant={"contained"} color={"green"}>
            {isLoading ? <Loader color={"white"} size={6} /> : "Apply"}
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};

export default EditPost;
