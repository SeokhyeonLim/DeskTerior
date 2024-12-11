import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Component/MainShop/MainPage";
import LoginPage from "./Component/MainShop/UserLogin/LoginPage";
import SignUpPage from "./Component/MainShop/UserLogin/SignUpPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
};

export default App;

