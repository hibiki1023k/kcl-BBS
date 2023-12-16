"use client";
import React, { useState } from 'react';
import Sidebar from './sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
    return (
        <div className="container">
            <div className="centent-area">
                <Sidebar />
                <main>{children}</main>
            </div>
        </div>
    );
}