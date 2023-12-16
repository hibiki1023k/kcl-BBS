// Modal.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Modal({ closeModal }) {
  const [text, setText] = useState('');

  // モーダルの表示状態を制御するための状態
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    // 投稿データを処理
    setShowModal(false);
    closeModal(); // モーダルを閉じる
  };

  const handleClose = () => {
    setShowModal(false);
    closeModal();
  };

  return (
    <>
      {/* モーダルの背景オーバーレイ */}
      {showModal && <div className="modal-backdrop show"></div>}
      {/* Bootstrapのモーダルクラスを適用 */}
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
