import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-light" style={{ position: 'fixed', bottom: 10, width: '100%' }}>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p>KCL BBS</p>
                    </div>
                    <div class="text-center">
                        <a href="https://twitter.com/Career_Kyutech" class="p-1" target="_blank" rel="noopener noreferrer">
                            KCL 公式X (旧: Twitter)
                        </a>
                        <a href="https://www.kyutech.ac.jp/career/kcl.html" class="p-1" target="_blank" rel="noopener norefferrer">
                            KCL（ITエンジニアリングスキルアップ講座）(九州工業大学公式HP)
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
