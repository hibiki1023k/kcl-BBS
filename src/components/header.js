// ~/src/components/header.js
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BsCalendar2EventFill, BsFillHouseDoorFill } from 'react-icons/bs';

const Header = ({ onOpenModal }) => {
  return (
    <header className="sticky-top border-bottom bg-white py-3 mb-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex mr-3">
          <Link href="/">
            <BsFillHouseDoorFill />
          </Link>
          <div className="ml-3">
            <Link href="/calendar">
              <BsCalendar2EventFill />
            </Link>
          </div>
        </div>
        <h4>KCL 掲示板</h4>
        <button className="btn btn-primary" onClick={onOpenModal}>
          投稿する
        </button>
      </div>
    </header>
  );
};

export default Header;