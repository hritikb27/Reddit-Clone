import React, { useContext } from "react";
import { postContext } from "../App";
import {v4} from "uniqid";

const AddNewPost = () => {
	const [setPosts] = useContext(postContext);

	function addPosts(event) {
		event.preventDefault();
		const newPostObj = {
			sub: "Demo",
			author: "Author",
			title: event.target.title.value,
			desc: event.target.desc.value,
			id:v4()
		};

		setPosts((prevState) => {
			localStorage.setItem("posts", JSON.stringify([...prevState, newPostObj]));
			return [...prevState, newPostObj];
		});
		event.target.reset();
	}

	return (
		<form onSubmit={(e) => addPosts(e)}>
			<input type="text" placeholder="Title" name="title" />
			<input type="text" placeholder="Description" name="desc" />
			<button>Add</button>
		</form>
	);
};

export default AddNewPost;
