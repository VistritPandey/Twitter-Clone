import React, { useState, useEffect } from 'react'
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <FlipMove>
            </FlipMove>
        </div>
    )
}

export default Feed
