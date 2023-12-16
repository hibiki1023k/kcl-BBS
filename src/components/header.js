// ~/src/components/header.js
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Header = ({onOpenModal}) => {
    return (
        <header className="sticky-top border-bottom bg-white" style={{marginLeft: '50px'}}>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link href="/">
                    Home
                </Link>
                <button onClick={onOpenModal}>
                    投稿する
                </button>
            </div>
        </header>
    );
};

export default Header;
