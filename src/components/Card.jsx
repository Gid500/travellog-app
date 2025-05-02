import React, { useState } from "react";
import Addloc from "./Addloc.jsx";
import './Card.css'

// https://placehold.co/300x200?text=Hawaii
export default function Card() {

    const [cardList, setCard] = useState([
       {id: 1, 
        imgUrl: 'https://placehold.co/300x200?text=Hawaii',
        locationName: '하와이',
        ratingStar: '★★★★★',
        rating: '5',
        info: '4면이 바다임에도 한국, 일본을 비롯한 동아시아나 동남아의 여름의 습한 여름 날씨가 아니라 쾌적한 여름 날씨라서 전 세계적인 관광지로 인기 있는 곳이다.'},
       {id: 2, 
        imgUrl: 'https://placehold.co/300x200?text=New York',
        locationName: '뉴욕',
        ratingStar: '★★★★★',
        rating: '5',
        info: '뉴욕은 타임스퀘어, 자유의 여신상, 엠파이어 스테이트 빌딩과 같은 랜드마크부터 센트럴 파크, 메트로폴리탄 미술관 등 다양한 문화 시설까지 풍부합니다.'},
       {id: 3, 
        imgUrl: 'https://placehold.co/300x200?text=London',
        locationName: '런던',
        ratingStar: '★★★★★',
        rating: '5',
        info: '런던은 영국의 수도이자 가장 큰 도시로 주요 관광지로는 버킹엄 궁전, 빅 벤, 웨스트민스터 사원, 런던 타워 등이 있습니다.'}
    ]);

   

    return(
        <div className="card-Line">
            <Addloc cardList={cardList} setCard={setCard}/>
            <div className="card-div">
                <div className="mainContentDiv">
                    <h4>인기 여행지</h4>
                </div>
                <div className="card-list">
                    {cardList.map((it)=>(
                        <a key={it.id} href="/post">
                            <div className="card-layer">
                                <div>
                                    <img className="travelImg" src={it.imgUrl} alt="" />
                                </div>
                                <p className="locName">
                                    {it.locationName}
                                </p>
                                <p className="rating">
                                    <span className="ratingStar">{it.ratingStar}</span> ({it.rating}/5)
                                </p>
                                <p className="info">
                                    {it.info}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}