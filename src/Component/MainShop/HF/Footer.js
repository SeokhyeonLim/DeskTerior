import React from "react";
import "../../CSS/MainPage/Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="information">
                    <span className="label">이름:</span> 임석현
                </div>
                <div className="information">
                    <span className="label">주소:</span> 경기도 평택시 팽성읍 팽성송화로 154
                </div>
            </div>
        </div>
    );
}

export default Footer;
