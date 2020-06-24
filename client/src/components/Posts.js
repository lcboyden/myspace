import React, { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./PostForm";

export default function Posts (props) {
  const [myPosts, setMyPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get("/api/my_posts");
    setMyPosts(res.data);
    const res1 = await axios.get("/api/all_posts");
    setAllPosts(res1.data);
    const res2 = await axios.get("/api/all_users");
    setUsers(res2.data);
    const res3 = await axios.get("/api/get_current_user");
    setCurrentUser(res3.data);
    const res4 = await axios.get("/api/users_and_posts");
    console.log(res4.data);
    setUserPosts(res4.data);
  }

  const addPost = (post) => {
     axios.post(`/api/user/${currentUser.id}/posts`, post)
       .then(res => {
      //  update front-end
        setMyPosts([res.data, ...myPosts])
       })
   }

  return (
    <div>
      Current User <p>email:{currentUser.email} id: {currentUser.id}{" "}</p>
      Users:
      <br />
        {users.map((u) => (
          <p key={`u-${u.id}`}>
            email: {u.email} user id: {u.id}
          </p>
        ))}
      <hr />
      {/* All Posts:
      {allPosts.map((p) => (
        <p key={`ap-${p.id}`}>
          post: {p.title}, user_id:{p.user_id}
        </p>
      ))} */}

      <h2>My Posts:</h2>
      {myPosts.map((p) => (
        <div key={`aps-${p.id}`}>
          <ul>
            <li>{p.title}</li>
              <ul>
                <li>{p.body}</li>
                <li>user_id:{p.user_id}</li>
              </ul>
          </ul>
        </div>
      ))}
      <hr />
      {/* User Post:
      {userPosts.map((p) => (
        <p key={`apus`}>
          post: {p.title}, email:{p.email}
        </p>
      ))}
      <hr /> */}

      <PostForm 
        addPost={addPost}
      />
    </div>
  );
}