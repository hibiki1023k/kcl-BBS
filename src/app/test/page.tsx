"use client"

import React, { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (email === 'user@example.com' && password === 'password') {
            // ログイン成功
            console.log('ログイン成功');
        } else {
            // ログイン失敗
            console.log('ログイン失敗');
        }
    };

    return (
        <div className="container">
            <div className="flex flex-col items-center justify-center">
                <div className="logo">
                    <img src="" alt="ロゴ" />
                </div>
                <div className="title">
                    <Button>Slack でログイン</Button>
                </div>
                {/* Slack認証画面に飛ぶようにする */}
                <div>
                    <a href="https://www.google.com/" target="_blank">ゲスト として参加</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
