import React, { useState } from "react";
import Postmodal from "../model/Postmodal.jsx";
import Addloc from "./Addloc.jsx";
import './Card.css'

// https://placehold.co/300x200?text=Hawaii
export default function Card() {
    const viewCount = 0;
    const [postIdx, setpostIdx] = useState(-1);
    const [modal, setModal] = useState(false);

    const [category, setCategory] = useState(
        ['아메리카', '유럽', '아시아', '아프리카', '오세니아']
    );

    const [cardList, setCard] = useState([
       {id: 1, 
        imgUrl: 'https://placehold.co/300x200?text=Hawaii',
        locationName: '하와이',
        ratingStar: '★★★★★',
        rating: '5',
        info: '4면이 바다임에도 한국, 일본을 비롯한 동아시아나 동남아의 여름의 습한 여름 날씨가 아니라 쾌적한 여름 날씨라서 전 세계적인 관광지로 인기 있는 곳이다.',
        viewCount: viewCount,
        category: '아메리카',
        },
       {id: 2, 
        imgUrl: 'https://placehold.co/300x200?text=New York',
        locationName: '뉴욕',
        ratingStar: '★★★★★',
        rating: '5',
        info: '뉴욕은 타임스퀘어, 자유의 여신상, 엠파이어 스테이트 빌딩과 같은 랜드마크부터 센트럴 파크, 메트로폴리탄 미술관 등 다양한 문화 시설까지 풍부합니다.',
        viewCount: viewCount,
        category: '아메리카',
        },
       {id: 3, 
        imgUrl: 'https://placehold.co/300x200?text=London',
        locationName: '런던',
        ratingStar: '★★★★★',
        rating: '5',
        info: '런던은 영국의 수도이자 가장 큰 도시로 주요 관광지로는 버킹엄 궁전, 빅 벤, 웨스트민스터 사원, 런던 타워 등이 있습니다.',
        viewCount: viewCount,
        category: '유럽',
        },
    ]);

    const modalHandler = () => {
        setModal(true);
    }

    const visit = (idx) => {
        modalHandler();
        setpostIdx(idx);
        cardList[idx].viewCount++;
        console.log(JSON.stringify(cardList[idx]) + " " + idx);
    }

    const openModel = (modal) => {
        return( modal && <Postmodal setModal={setModal} cardList={cardList} postIdx={postIdx}/> )
    }

    return(
        <div>
            <Addloc cardList={cardList} setCard={setCard} viewCount={viewCount}/>
            <div className="card-div">
                <div className="mainContentDiv">
                    <h4>인기 여행지</h4>

                    <div className="category-div">
                        {category.map((category, idx) => (
                            <button key={idx}>
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {openModel(modal)}
                <div className="card-list">

                    {cardList.map((it, idx) => (
                        <div key={it.id} className="card-layer">
                            <div>
                                <img className="locationImg" src={it.imgUrl} alt="" />
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
                            <div className="modal-btnWrap">
                                <button type="button" 
                                    onClick={() => {visit(idx)}}
                                >상세정보</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}