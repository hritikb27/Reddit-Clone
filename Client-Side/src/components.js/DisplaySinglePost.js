import React, { useContext } from "react";
import { postContext } from "../App";

const DisplaySinglePost = (props) => {
	const [posts] = useContext(postContext);

	return (
		<div className="single-post">
			{posts.map((post) => {
                if(props.id===post.id){
                    return (
                            <div className="posts">
                                <span>r/{post.sub}</span>
                                <span> Posted by u/{post.author}</span>
                                <h3>{post.title}</h3>
                                <p>{post.desc}</p>
                            </div>
                    );
                }
			})}
		</div>
	);
};

export default DisplaySinglePost;
