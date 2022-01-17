import React, { useContext } from "react";
import { postContext } from "../App";
import { Link } from "react-router-dom";

const Posts = () => {
	const [posts] = useContext(postContext);

	return (
		<div className="main-content">
			{posts.map((post) => {
				return (
					<Link to={`post/${post.id}`}>
						<div className="posts">
							<span className="sub-name">r/{post.sub}</span>
							<span className="username"> Posted by u/{post.author}</span>
							<h3>{post.title}</h3>
							<p className="post-desc">{post.desc}</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Posts;
