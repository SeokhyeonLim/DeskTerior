import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/LoginPage/LoginPage.css"
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/login", { username, password });
            // 로그인 성공 시 처리 ㅅㅂ 왜 안되는데
            console.log("로그인 성공:", response.data);
        } catch (error) {
            console.error("로그인 실패:", error);
        }
    };

    return (
        <div>
            <Link to="/">
                <h1 className="HEAD">DESKTERIOR</h1>
            </Link>
            <div className="auth-container">
                <h2>로그인</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="사용자 이름"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">로그인</button>
                    <Link to="/signup">
                        <button type="button">회원가입</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
