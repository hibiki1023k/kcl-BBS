// ~/src/pages/index.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Remarkable } from "remarkable";
import { ref, onValue } from "firebase/database";
import { getDatabase } from "firebase/database";
import { app } from "../pages/_app";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const md = new Remarkable();

    useEffect(() => {
        const database = getDatabase(app);
        const postRef = ref(database, "posts");
        onValue(postRef, (snapshot) => {
            const data=snapshot.val();
            console.log(data);
            const loadedPosts = [];
            for(const key in data){
                console.log(data[key]);
                loadedPosts.push({
                    id: key,
                    content: md.render(data[key]),
                });
            }
            console.log(loadedPosts);
            setPosts(loadedPosts);
        });
    }, []);

    return (
        <>
            {posts.map((post, index) => (
                <div key={index} className="card mb-2">
                    <div className="card-body ">
                        <div className="card-text" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>
                </div>
            ))}
        </>
    );
}
