import React from "react";
import './Postmodal.css'

export default function Postmodal({setModal, cardList, postIdx}) {
    
    const offModal = () => {
        setModal(false);
    }

    const stopBububling = (e) => {
        e.stopPropagation();
    }

    return(
        <div className="modalBackground" 
            onClick={offModal}>
            <div key={cardList[postIdx].id} className="modalCard" onClick={stopBububling}>
                <div className="x-button-Wrap">
                    <span onClick={offModal} className="x-button">✖</span>
                </div>
                <div>
                    <img className="modalImg" 
                    src={cardList[postIdx].imgUrl} 
                    alt=""
                    />
                </div>
                <p className="locName">
                    {cardList[postIdx].locationName}
                </p>
                <p className="rating">
                    <span className="ratingStar">{cardList[postIdx].ratingStar}</span> ({cardList[postIdx].rating}/5)
                </p>
                <p className="info">
                    {cardList[postIdx].info}
                </p>
                <div className="viewCnt">
                    <span>방문자수</span> <span>{cardList[postIdx].viewCount}</span>
                </div>
            </div>
        </div>
    )
}