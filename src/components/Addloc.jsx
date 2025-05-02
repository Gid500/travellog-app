import React, { useState } from "react";

export default function Addloc({cardList, setCard}) {
    let temp = '';
    
    const [locationName, setLocname] = useState('');
    const [imgUrl, setimgUrl] = useState('');
    const [rating, setData] = useState('3')
    const [stars, setstars] = useState('★★★☆☆');
    const [infoText, setinfoText] = useState('');
    
    function addStar() {
        for(let i = 0 ; i < rating ; i++) {
            temp += '★';
        }
        for(let j = 5 ; j > rating ; j--) {
            temp += '☆';
        }
        setstars(temp);
    }

    const handleonchange1 = (e) => {
        setLocname(e.target.value);
    };
    const handleonchange2 = (e) => {
        setimgUrl(e.target.value);
    };
    const handleonchange3 = (e) => {
        setinfoText(e.target.value);
    };
    const handleonchange4 = (e) => {
        setData(e.target.value);
        addStar();
    };
    const handleonchange5= (e) => {
        setData(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();
        addCard(locationName, imgUrl, stars, rating, infoText);
    }
    
    const addCard = () => {
        const newCard = {
            id          :   Date.now()  ,
            imgUrl      :   imgUrl      ,
            locationName:   locationName,
            ratingStar  :   stars       ,
            rating      :   rating      ,
            info        :   infoText    ,
        };

        console.log(`새 카드: ${JSON.stringify(newCard)}`);
        setCard([...cardList, newCard]);
    }

    return(
        <div className="addLoc-wapper">
            <form className="addLoc" onSubmit={handleSubmit}>

                <div className="input-div">
                    <h3 className="addLocH3">새로운 여행지 추가</h3>
                    <label htmlFor="locName"><span>여행지 이름</span></label>
                    <input onChange={handleonchange1} value={locationName} id="locName" type="text" placeholder="예: 파리"/>
                </div>

                <div className="input-div">
                    <label htmlFor="imgUrl"><span>이미지 URL (선택사항)</span></label>
                    <input onChange={handleonchange2} value={imgUrl} id="imgUrl" type="text" placeholder="https://example.com/image.jpg"/>
                </div>

                <div className="input-div">
                    <label htmlFor="infoText"><span>설명</span></label>
                    <textarea onChange={handleonchange3} value={infoText} id="infoText" placeholder="이 여행지에 대한 설명을 작성하세요"></textarea>
                </div>

                <div className="input-div">
                    <label htmlFor="rating"><span>평점(1-5)</span></label>
                    <div className="input-div-div">
                        <input onChange={handleonchange5} onClick={handleonchange4} value={rating} id="rating" type={"range"} min={"1"} max={"5"}
                        />{rating}
                    </div>
                </div>

                <div className="button-div">
                    <button type="submit">여행지 추가</button>
                </div>
            </form>
        </div>
    )
}