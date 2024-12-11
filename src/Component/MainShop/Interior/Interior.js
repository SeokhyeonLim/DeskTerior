import React from "react";
import '/Users/imseoghyeon/Desktop/DeskTerior/deskterior/src/Component/CSS/InteriorPage/Interior.css'
import Header from "../HF/Header";

const Interior = () => {
    // 예시 데이터 - 실제로는 API나 데이터베이스에서 가져올 수 있습니다
    const items = [
        {
            id: 1,
            title: "모던한 책상 셋팅",
            image: "https://example.com/image1.jpg",
            description: "깔끔한 책상 인테리어",
            likes: 0,
            views: 0
        }
    ];

    return (
        <div className="interior-container">
            <div className="Header-Container"><Header/></div>
            <h2 className="interior-title">인테리어 모음</h2>
            <div className="interior-grid">
                {items.map(item => (
                    <div key={item.id} className="interior-card">
                        <div className="interior-image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="interior-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="interior-stats">
                                <span>👍 {item.likes}</span>
                                <span>👀 {item.views}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interior;