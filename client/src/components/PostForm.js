import React, { useEffect, useState } from "react";

const PostForm = (props) => {
  // the state -- > useState
  const [ title, setTitle ] = useState("")
  const [ body, setBody ] = useState("")
 
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addPost({title: title, body: body}) 
    // const addPost = (post) => {
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name="title"
          value={title}
          placeholder="title"
          onChange={ (e) => setTitle(e.target.value) }
        />
        <br />
        <input 
          name="body"
          value={body}
          placeholder="body"
          onChange={ (e) => setBody(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>

    </div>
  )

}

export default PostForm;