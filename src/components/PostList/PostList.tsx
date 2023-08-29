import React, { ComponentPropsWithoutRef, FC, ForwardedRef } from "react";
import Typography from "../../styles/components/Typography/Typography";
import PostCard from "../Post/PostCard";
import Grid from "../../styles/components/Grid/Grid";
import { IPostData } from "../../models/IPost";
import { h3 } from "../../styles/fonts/h3";

interface IPosts extends ComponentPropsWithoutRef<"div"> {
  posts: IPostData[];
  ref: ForwardedRef<HTMLDivElement>;
}

const PostList: FC<IPosts> = React.forwardRef(({ posts }, ref) => {
  return (
    <div ref={ref} style={{ padding: "0 30px 30px" }}>
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
});

export default PostList;
