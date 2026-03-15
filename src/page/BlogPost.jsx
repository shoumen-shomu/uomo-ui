import React from "react";
import BlogList from "../component/blogPost/BlogList";
import SingleBlog from "@/component/common/SingleBlog";

const BlogPost = () => {
  return (
    <>
      <BlogList />
      <SingleBlog/>
    </>
  );
};

export default BlogPost;
