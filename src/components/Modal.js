// ~/src/app/Modal.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

function Modal({ closeModal }) {
    const [text, setText] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [preview, setPerview] = useState('');

    useEffect(() => {
        setShowModal(true);
    }, []);

    const handleSubmit = () => {
        console.log('submit:', text);
        // Todo: サーバーにデータ追加
        setShowModal(false);
        closeModal();
    };

    const handleClose = () => {
        setShowModal(false);
        closeModal();
    };

    const handleChange = (e) => {
        const markdownText = e.target.value;
        setText(markdownText);
        setPerview(DOMPurify.sanitize(marked(markdownText)));
    }

    return (
        <>
            {showModal && <div className="modal-backdrop show"></div>}
            <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ 
                    width: '80%', maxWidth: '1800px', 
                    }}>
                    <div className="modal-content" style={{ height: '600px', maxHeight: '80vh', overflowY: 'auto' }}>
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100">感想をPostしよう！</h4>
                            <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{ height: '100%' }}>
                            <div className="row" style={{ height: '100%' }}>
                                <div className="col-md-6 pr-md-2" style={{ height: '100%' }} >
                                    <div className="card">
                                        <div className="card-body">
                                            <textarea className="form-control" style={{ height: '100%', minHeight: '200px', border: '0', outline: 'none', resize: 'none' }} value={text} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-md-2" style={{ height: '100%' }} >
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="markdown-preview" style={{ height: '100%', minHeight: '200px', overflow: 'auto' }} dangerouslySetInnerHTML={{ __html: preview }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>投稿</button>
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>閉じる</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
