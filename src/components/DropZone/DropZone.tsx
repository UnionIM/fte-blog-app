import React, { Dispatch, FC, SetStateAction } from "react";
import { useDropzone } from "react-dropzone";
import {
  StyledDefaultImg,
  StyledDrop,
  StyledDropZone,
  StyledImgWrapper,
  StyledSelect,
} from "./index";

interface IDropZone {
  file: Blob[];
  setFile: Dispatch<SetStateAction<Blob[]>>;
  img?: string;
}

const DropZone: FC<IDropZone> = ({ file, setFile, img }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles.map((file) => file));
    },
  });

  const images = file.map((file) => (
    <div key={URL.createObjectURL(file)}>
      <div>
        <img
          src={URL.createObjectURL(file)}
          style={{ maxWidth: "390px" }}
          alt="prev"
        />
      </div>
    </div>
  ));

  return (
    <div>
      <StyledDropZone {...getRootProps()} isDragActive={isDragActive}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <StyledDrop>Drop here</StyledDrop>
        ) : (
          <StyledSelect>Select new picture</StyledSelect>
        )}
        {img && <StyledDefaultImg src={img} alt="" />}
        <StyledImgWrapper>{images}</StyledImgWrapper>
      </StyledDropZone>
    </div>
  );
};

export default DropZone;
