import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/LoginPage/SignUp.css";

const SignUpPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/signup", {
                username,
                email,
                phone,
                birth: `${birthYear}-${birthMonth}-${birthDay}`,
                password,
            });
            console.log("회원가입 성공:", response.data);
        } catch (error) {
            console.error("회원가입 실패:", error);
        }
    };

    return (
        <div className="auth-container">
            <h2>회원가입</h2>
            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    placeholder="사용자 이름"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="핸드폰"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <div className="birth-container">
                    <select
                        value={birthYear}
                        onChange={(e) => setBirthYear(e.target.value)}
                        required
                    >
                        <option value="">년</option>
                        {[...Array(100)].map((_, i) => (
                            <option key={i} value={2024 - i}>{2024 - i}</option>
                        ))}
                    </select>
                    <select
                        value={birthMonth}
                        onChange={(e) => setBirthMonth(e.target.value)}
                        required
                    >
                        <option value="">월</option>
                        {[...Array(12)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                    <select
                        value={birthDay}
                        onChange={(e) => setBirthDay(e.target.value)}
                        required
                    >
                        <option value="">일</option>
                        {[...Array(31)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </div>

                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                    <Link to="/">
                    <button type="submit">회원가입</button>
                    </Link>
            </form>
        </div>
    );
};

export default SignUpPage;
