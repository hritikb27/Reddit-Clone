import React, { useState } from "react";

const Posts = ()=>{
    const posts = JSON.parse(localStorage.getItem('posts'));

    return (
        <div className='main-content'>

            {posts.map(post=>{
                return <div className='posts'>
                    <span className='sub-name'>r/{post.sub}</span>
                    <span className='username'> Posted by u/{post.author}</span>
                    <h3>{post.title}</h3>
                    <p className='post-desc'>{post.desc}</p>
                </div>
            })}
        </div>
    )
}

export default Posts