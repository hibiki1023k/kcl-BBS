import React, { useRef, useState, useEffect } from 'react';
import { BsCalendar2EventFill, BsTwitterX, BsCompassFill, BsFillPersonPlusFill } from "react-icons/bs";

function Sidebar() {
    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    useEffect(() => {
        adjustTextareaHeight();
    }, [text]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const adjustTextareaHeight = () => {
        if(textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = '${textareaRef.current.scrollHeight}px';
        }
    };

    return (
        <div className="sidebar" style={{
            position: 'absolute', 
            left: 0, top: 0, bottom: 0, 
            backgroundColor: 'lightgray', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '15px', 
            width: '250px',
        }}>
            <div style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
            }}>
                <a href="/" rel="noopener noreferrer">
                    <BsCalendar2EventFill />
                </a>
                <a 
                href="https://twitter.com/Career_Kyutech" 
                target='_blank'
                rel="noopener noreferrer"
                >
                    <BsTwitterX />
                </a>
                <a 
                href="https://www.kyutech.ac.jp/career/kcl.html" 
                target='_blank'
                rel="noopener noreferrer"
                >
                    <BsCompassFill />
                </a>
                <a 
                href="https://forms.office.com/pages/responsepage.aspx?id=qYb528fyAUeIzkY97HbLpB-zKEplxShPoixnaC14gZxURUZXQjRFSDFIWEhPNEVGNEtRU1RNUkhFSi4u" 
                target='_blank'
                rel="noopener noreferrer"
                >
                    <BsFillPersonPlusFill />
                </a>
            </div>
            <div style={{
                marginTop: '20px',
                width: '90%',
            }}>
                <textarea
                    ref={textareaRef}
                    value={text}
                    onChange={handleChange}
                    style={{ width: '100%', overflow: 'hidden', resize: 'none' }}
                    rows={4}
                />
                <div>
                <button className="btn btn-primary" type="button" style={{
                    marginTop: '10px',
                    }}>
                        投稿
                </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;