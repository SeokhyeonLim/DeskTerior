import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/MainPage/Header.css";

const Header = () => {
    const menuItems = ["컴퓨터", "모니터", "책상", "의자", "악세서리"];
    const userOptions = [
        { name: "로그인", path: "/login" },
        { name: "회원가입", path: "/signup" },
        { name: "인테리어", path: "/Interior"},
        { name: "게시판" , path: "/board"},
        { name: "고객센터", path: "#" }
    ];

    return (
        <div className="header-container">
            <div className="top-bar">
                <h1 className="logo">DeskTerior</h1>
                <div className="search-bar">
                    <input type="text" id="searchInput" placeholder="검색" />
                    <button id="searchButton">검색</button>
                </div>
                <div className="user-options">
                    {userOptions.map(option => (
                        <Link key={option.name} to={option.path} className="user-option">
                            {option.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="menu-bar">
                {menuItems.map(item => (
                    <div key={item} className="menu-item">{item}</div>
                ))}
            </div>
        </div>
    );
}

export default Header;
