// ~/src/components/header.js
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Header = ({ onOpenModal }) => {
  return (
    <header className="sticky-top border-bottom bg-white py-3 mb-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link href="/">
          Home {/* Bootstrapのナビゲーションリンクスタイルを適用 */}
        </Link>
        <h4>KCL 掲示板</h4>
        <button className="btn btn-primary" onClick={onOpenModal}> {/* Bootstrapのボタンスタイルを適用 */}
          投稿する
        </button>
      </div>
    </header>
  );
};

export default Header;