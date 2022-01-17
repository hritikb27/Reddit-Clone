import React, { createContext, useState } from "react";
import DummyData from "./components.js/DummyData";
import "./style.scss";
import Nav from "./components.js/Nav";
import Posts from "./components.js/Posts";
import AddNewPost from "./components.js/AddNewPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DisplaySinglePost from "./components.js/DisplaySinglePost";

const postContext = createContext();

function App() {
	if (!localStorage.getItem("posts")) {
		localStorage.setItem("posts", JSON.stringify(DummyData));
	}

	const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")));

	return (
		<div className="App">
			<postContext.Provider value={[posts, setPosts]}>
				<BrowserRouter>
					<Nav />
					<AddNewPost />
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/sign-up" element={<SignUp />} />
						<Route path="/post/" element={<DisplaySinglePost />} />
						<Route path="/" element={<Posts />} />
					</Routes>
				</BrowserRouter>
			</postContext.Provider>
		</div>
	);
}

export { App, postContext };
