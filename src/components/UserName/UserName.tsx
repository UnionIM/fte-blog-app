import React, { FC } from "react";
import { Avatar, ImgAvatar } from "../Header";
import Typography from "../../styles/components/Typography/Typography";
import Flex from "../../styles/components/Flex/Flex";
import { IBaseStyles } from "../../models/IBaseStyles";
import { TUser } from "../../models/TUser";

interface IUserName {
  user: TUser;
  sx?: Partial<IBaseStyles>;
}

const UserName: FC<IUserName> = ({ user, sx }) => {
  return (
    <Flex gap={11} alignItems={"center"} sx={sx}>
      {user.avatar ? (
        <ImgAvatar src={user.avatar} alt={user.name && user.name[0]} />
      ) : (
        <Avatar>{user.name && user.name[0]}</Avatar>
      )}
      <Typography>{user.name || "user"}</Typography>
    </Flex>
  );
};

export default UserName;
