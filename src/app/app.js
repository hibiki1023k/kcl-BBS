// app.js
import React, { useState } from 'react';
import Header from './header';
import Modal from './Modal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <Header onOpenModal={handleOpenModal} />
            {isModalOpen && <Modal onClose={handleCloseModal} />}
        </>
    );
}

export default App;
