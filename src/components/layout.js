// ~/src/components/layout.js
"use client";
import React, { useState } from 'react';
import Header from './header';
// import Footer from './footer';
import Sidebar from './sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children, onOpenModal }) {
    return (
        <div className="container">
            <Header onOpenModal={onOpenModal}/>
            <div className="centent-area">
                <Sidebar />
                <main>{children}</main>
            </div>
        </div>
    );
}