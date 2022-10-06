import React, { useState, Component } from "react";
import { Link } from "react-router-dom";

const demoPosts = [
  {
    _id: 1,
    postTitle: "Post 1",
    postText: "afjiwejiqfjfhuqejclqhcui2efjskdhfjlqkwhdjqshcq",
    username: "user",
    tags: ["food", "fun"],
  },
  {
    _id: 1,
    postTitle: "Post 2",
    postText: "afjiwejiqfjfhuqejclqhcui2efjskdhfjlqkwhdjqshcq",
    username: "user",
    tags: ["food", "fun"],
  },
  {
    _id: 1,
    postTitle: "Post 3",
    postText: "afjiwejiqfjfhuqejclqhcui2efjskdhfjlqkwhdjqshcq",
    username: "user",
    tags: ["food", "fun"],
  },
  {
    _id: 1,
    postTitle: "Post 4",
    postText: "afjiwejiqfjfhuqejclqhcui2efjskdhfjlqkwhdjqshcq",
    username: "user",
    tags: ["food", "fun"],
  },
];

const renderTags = (tags) => {
  return tags.map((tag) => (
    <div className="flex justify-between">
      <a href="/" className="px-2 py-1 rounded dark:bg-black text-sm">
        {tag}
      </a>
    </div>
  ));
};

const renderPosts = (posts) => {
  return posts.map((post) => (
    <div className="container max-w-4xl px-10 py-6 my-5 mx-auto rounded-lg shadow-sm dark:bg-cyan-700 text-white">
      <div className="grid grid-cols-12">{renderTags(post.tags)}</div>
      <div className="mt-3">
        <Link
          to={`/post/${post._id}}`}
          className="text-2xl font-bold hover:underline"
        >
          {post.postTitle}
        </Link>
        <p className="mt-2">{post.postText}</p>
      </div>

      <div className="flex justify-end mt-4">
        <a href="/">
          <div>
            <span className="hover:underline text-white">{post.username}</span>
          </div>
        </a>
      </div>
    </div>
  ));
};

const PostList = ({ posts, postTitle }) => {
  return (
    <div>
      <div className="bg-neutral-100 py-10">{renderPosts(demoPosts)}</div>
    </div>
  );
};

export default PostList;
