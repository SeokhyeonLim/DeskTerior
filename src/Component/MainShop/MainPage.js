import React from "react";
import Header from "../MainShop/HF/Header";
import Footer from "../MainShop/HF/Footer"; // Footer 컴포넌트 임포트
import Banner from "../MainShop/Banner/Banner"; // Banner 컴포넌트 임포트
import "../CSS/MainPage/MainPage.css"; // 메인 페이지 스타일 파일 임포트

const MainPage = () => {
    return (
        <div className="main-page">
            <Header />
            <Banner />
            <section className="products-section">
                <h2>조회수가 많은 게시물</h2>
                <div className="product-list">
                    <div className="product">
                        <img src="/images/product1.jpg" alt="Product 1" />
                    </div>
                    <div className="product">
                        <img src="/images/product2.jpg" alt="Product 2" />
                    </div>
                    <div className="product">
                        <img src="/images/product3.jpg" alt="Product 3" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default MainPage;
