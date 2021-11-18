import React,{useState} from "react";
import DummyData from "./DummyData";

const AddNewPost = ()=>{
    if(!localStorage.getItem('posts')){
        localStorage.setItem('posts',JSON.stringify(DummyData));
    }

    const [posts,setPosts] = useState(JSON.parse(localStorage.getItem('posts')));

    function addPosts(event){
        event.preventDefault();
        const newPostObj = {
            'sub': 'Demo',
            'author': 'Author',
            'title': event.target.title.value,
            'desc': event.target.desc.value
        }
        
        setPosts(prevState=>{
            localStorage.setItem('posts',JSON.stringify([...prevState, newPostObj]));
            return [...prevState,newPostObj];
        })
        event.target.reset();
    }

    return(
        <form onSubmit={(e)=>addPosts(e)}>
                <input type='text' placeholder='Title' name='title' />
                <input type='text' placeholder='Description' name='desc' />
                <button>Add</button>
            </form>
    )
}

export default AddNewPost