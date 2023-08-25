/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { Card } from "./styled";
import Typography from "../../styles/components/Typography/Typography";
import { h3 } from "../../styles/fonts/h3";
import Star from "../../styles/components/Star";
import Rating from "react-rating";
import Flex from "../../styles/components/Flex/Flex";
import { Link } from "react-router-dom";
import { IPostData } from "../../models/IPost";
import Box from "../../styles/components/Box/Box";

interface IPost {
  post: IPostData;
}

const PostCard: FC<IPost> = ({ post }) => {
  return (
    <Card>
      {post.image ? (
        <img
          src={post.image}
          alt={post.id}
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "8px 8px 0 0",
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "200px",
            backgroundColor: "gray",
            borderRadius: "8px 8px 0 0",
          }}
        />
      )}
      <div style={{ padding: "15px 15px 35px 15px" }}>
        <Typography styles={h3} sx={{ margin: "0 0 6px 0" }}>
          {post.title}
        </Typography>
        <Typography styles={{ color: "black", fontSize: "14px" }}>
          {post.description.length >= 340
            ? post.description.slice(0, 339) + "..."
            : post.description}
        </Typography>
        <Flex
          justifyContent={"space-between"}
          sx={{ position: "absolute", bottom: "15px", width: "87%" }}
        >
          <Rating
            readonly
            initialRating={parseInt(post.rating)}
            fullSymbol={<Star filled />}
            emptySymbol={<Star />}
          />
          <Link to={`/posts/${post.id}`}>Details...</Link>
        </Flex>
      </div>
    </Card>
  );
};

export default PostCard;
