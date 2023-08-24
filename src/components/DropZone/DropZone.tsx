import React, { Dispatch, FC, SetStateAction } from "react";
import { useDropzone } from "react-dropzone";
import {
  StyledDefaultImg,
  StyledDrop,
  StyledDropZone,
  StyledImgWrapper,
  StyledSelect,
} from "./index";
import { IFile } from "../../models/IFile";

interface IDropZone {
  file: IFile[];
  setFile: Dispatch<SetStateAction<IFile[]>>;
  img?: string;
}

const DropZone: FC<IDropZone> = ({ file, setFile, img }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const images = file.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ height: "200px" }} alt="prev" />
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
