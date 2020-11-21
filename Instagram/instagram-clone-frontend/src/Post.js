import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Ganesh Singh"
          src="/static/images/avatar/1.jpg"
        >
          {/* header - avatar + usename */}
        </Avatar>
        <h3>Username</h3>
      </div>

      <img
        alt=""
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
      {/* image */}

      {/* username + caption */}
      <h4 className="post__text">
        <strong>Ganesh Singh </strong> : This is caption
      </h4>
    </div>
  );
}

export default Post;
