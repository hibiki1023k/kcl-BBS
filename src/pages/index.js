// ~/src/app/page.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Modal from "../components/Modal";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/api/posts")
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error("Error fetching posts:",error);
            });
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleNewPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    return (
        <>
            <Header onOpenModal={handleOpenModal} />
            {isModalOpen && <Modal closeModal={handleCloseModal} onNewPost={handleNewPost} />}
            {/* 投稿を表示 */}
            {posts.map((post, index) => (
                <div key={index}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                </div>
            ))}
    </>
    );
}
