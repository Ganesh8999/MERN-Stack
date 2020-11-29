import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "GAnesh SIngh",
      caption: "great programmer",
      imageUrl:
        "https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png",
    },
    {
      username: "GAnesh SIngh",
      caption: "great programmer",
      imageUrl:
        "https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png",
    },
  ]);

  return (
    <div className="app">
      {/* <h1>Instagram clone</h1> */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
          alt="instagram_logo"
          height="100px"
        />
      </div>
      {/* Header */}
      <Post
        imageUrl="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/07/jeff-bezos-1595509574.jpg"
        username="jeffBezzos"
        caption="Richest man"
      />
      <Post
        imageUrl="https://www.theblueoceansgroup.com/wp-content/uploads/2019/12/Top-10-Richest-Person-in-the-World-1-300x199.jpeg"
        username="bill gates"
        caption="2nd billionare"
      />

      <Post
        imageUrl="https://i.insider.com/5d84ce522e22af4c215743c6?width=1136&format=jpeg"
        username="mark_zuckerberg"
        caption="facebook"
      />

      {/* Posts */}
      {/* Posts */}
      {/* Posts */}


      
{
  posts.map(post => {
    <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}>
  })
}

    </div>
  );
}

export default App;
