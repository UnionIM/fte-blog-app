import React, { FormEvent, useState } from "react";
import { Box, Flex, smallGray, Typography } from "../../styles";
import DropZone from "../../components/DropZone/DropZone";
import { Button, Input, Loader } from "../../components";
import { postApi } from "../../service/PostService";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";
import { getBase64 } from "../../service/utils/getBase64";

const CreatePost = () => {
  const [file, setFile] = useState<Blob[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [mutation, { isLoading }] = postApi.useCreatePostMutation();
  const { user } = useAppSelector((state) => state.user);
  const nav = useNavigate();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (user.id) {
      const base64 = await getBase64(file[0]);
      await mutation({
        title,
        description,
        authorId: user.id,
        image: typeof base64 === "string" ? base64 : null,
      });
    }
    nav("/");
  };

  const resetHandler = async () => {
    setFile([]);
    setTitle("");
    setDescription("");
  };

  return (
    <Box sx={{ padding: "40px" }}>
      <DropZone file={file} setFile={setFile} />
      <form onSubmit={handleFormSubmit}>
        <Box sx={{ margin: "0 auto", maxWidth: "500px" }}>
          <Typography styles={smallGray} sx={{ margin: "35px 0 0 0" }}>
            Title
          </Typography>
          <Input
            required
            setState={setTitle}
            sx={{ width: "100%", maxWidth: "500px" }}
            value={title}
            placeholder={"Enter title name"}
          />
          <Typography styles={smallGray} sx={{ margin: "16px 0 0 0" }}>
            Description
          </Typography>
          <Input
            required
            multiline
            setState={setDescription}
            sx={{ width: "100%", maxWidth: "500px" }}
            rows={4}
            value={description}
            placeholder={"Enter description"}
          />

          <Flex sx={{ margin: "18px 0 0 0" }} gap={10}>
            <Button
              type={"reset"}
              variant={"outlined"}
              color={"black"}
              onClick={resetHandler}
            >
              Reset
            </Button>
            <Button type={"submit"} variant={"contained"} color={"green"}>
              {isLoading ? <Loader color={"white"} size={6} /> : "Apply"}
            </Button>
          </Flex>
        </Box>
      </form>
    </Box>
  );
};

export default CreatePost;
