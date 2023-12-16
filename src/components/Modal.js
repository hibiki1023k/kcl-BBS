// ~/src/app/Modal.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

function Modal({ closeModal }) {
    const [text, setText] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true);
    }, []);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = () => {
        setShowModal(false);
        closeModal();
    };

    const handleClose = () => {
        setShowModal(false);
        closeModal();
    };

    return (
        <>
            {showModal && <div className="modal-backdrop show"></div>}
            <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">投稿フォーム</h5>
                            <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <textarea className="form-control" value={text} onChange={handleChange} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>閉じる</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>投稿</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
