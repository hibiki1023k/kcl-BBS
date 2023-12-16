// ~/src/app/_app.js
import React, { useState } from 'react';
import Header from '../components/header'
import Modal from '../components/Modal';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebaseConfig';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const app = initializeApp(firebaseConfig);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        console.log('Open Modal');
    };
    

    const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log('Close Modal');
    }
    console.log('App');

    return (
        <div className="App">
            <Header onOpenModal={handleOpenModal} />
            {isModalOpen && <Modal closeModal={handleCloseModal} />}
        </div>
    );
}

export default App;
