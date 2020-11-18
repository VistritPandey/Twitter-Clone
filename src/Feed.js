import React from 'react'
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";
import TweetBox from "./TweetBox";

function Feed() {
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
