import React from "react";
import './Postmodal.css'

export default function Postmodal({setModal, cardLists, postIdx}) {
    
    const offModal = () => {
        setModal(false);
    }

    const stopBububling = (e) => {
        e.stopPropagation();
    }

    return(
        <div className="modalBackground" 
            onClick={offModal}>
            <div key={cardLists[postIdx].id} className="modalCard" onClick={stopBububling}>
                <div className="x-button-Wrap">
                    <span className="locName2"><h3>{cardLists[postIdx].locationName}</h3></span>
                    <span onClick={offModal} className="x-button">✖</span>
                </div>
                <div>
                    <img className="modalImg" 
                    src={cardLists[postIdx].imgUrl} 
                    alt=""
                    />
                </div>
                <p className="rating">
                    <span className="ratingStar">{cardLists[postIdx].ratingStar}</span> ({cardLists[postIdx].rating}/5)
                </p>
                <p className="info">
                    {cardLists[postIdx].info}
                </p>
                <div className="viewCnt">
                    <span className="viewCnt-font">이 페이지 방문 횟수: {cardLists[postIdx].viewCount}</span>
                </div>
            </div>
        </div>
    )
}