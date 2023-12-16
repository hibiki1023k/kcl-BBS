// ~/src/pages/index.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Modal from "../components/Modal";
import { Remarkable } from "remarkable";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState([
        {content: "### test"},
        {content: "これは2番目のテスト投稿です。"}
    ]);

    // useEffect(() => {
    //     fetch("/api/posts")
    //         .then((response) => {
    //             if(!response.ok) {
    //                 throw new Error("Network response was not ok");
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setPosts(data);
    //             console.log(posts);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching posts:",error);
    //         });
    // }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // const handleNewPost = (newPost) => {
    //     setPosts([...posts, newPost]);
    // };
    console.log(posts);

    const md = new Remarkable();
    return (
        <>
            {posts.map((post, index) => {
                let htmlContent = md.render(post.content);
                console.log(htmlContent);
            
                return (
                    <div key={index} className="card mb-3">
                        <div className="card-body">
                            {/* htmlContent を dangerouslySetInnerHTML で使用 */}
                            <div className="card-text" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                        </div>
                    </div>
                    );
                })}
            </>
        );
    }
