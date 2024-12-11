import React, { useState, useEffect } from 'react';
import '../../CSS/Banner.css';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 인덱스 상태
    const [isPaused, setIsPaused] = useState(false); // 마우스 호버 시 슬라이드 정지 여부 상태
    const slides = ["/Banner/DeskTerior1.jpg", "/Banner/DeskTerior2.jpg", "/Banner/DeskTerior3.jpg"]; // 이미지 경로 배열

    useEffect(() => {
        // 자동 재생 설정 (매 3초마다 다음 슬라이드 보여주기)
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
            }
        }, 3000);

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
    }, [slides.length, isPaused]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleMouseEnter = () => {
        setIsPaused(true); // 마우스를 올렸을 때 슬라이드 정지
    };

    const handleMouseLeave = () => {
        setIsPaused(false); // 마우스를 내렸을 때 슬라이드 재개
    };

    return (
        <div className="banner" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {slides.map((slide, index) => (
                <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                    <img
                        src={slide}
                        alt={`Slide ${index + 1}`}
                    />
                </div>
            ))}
            <div className="banner-controls">
                <button className="prev" onClick={prevSlide}>◀</button>
                <button className="next" onClick={nextSlide}>▶</button>
            </div>
        </div>
    );
};

export default Banner;
