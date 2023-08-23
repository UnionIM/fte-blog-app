import React, { FC, RefObject } from "react";
import { PostCard } from "../";
import { IPostData } from "../../models/IPost";
import { h3, Typography, Grid } from "../../styles";

interface IPosts {
  posts: IPostData[];
  elementRef: RefObject<HTMLDivElement>;
}

const PostList: FC<IPosts> = ({ posts, elementRef }) => {
  return (
    <div ref={elementRef} style={{ padding: "0 30px 30px" }}>
      <Grid
        gap={20}
        gridTemplateColumns={"repeat(auto-fit, minmax(12rem, 23rem))"}
        justifyContent={"center"}
      >
        {posts.length ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <Typography styles={h3} sx={{ textAlign: "center" }}>
            No posts
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default PostList;
