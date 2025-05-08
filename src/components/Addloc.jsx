import React, { useState } from "react";
import AddLocName from "./AddLocName";
import ImgUrl from "./ImgUrl";
import InfoText from "./InfoText";
import Rating from "./Rating";

export default function Addloc({cardLists, setCardLists, viewCount}) {
    let temp = '';

    const [inputs, setInputs] = useState({
        locationName    : '',
        imgUrl          : '',
        infoText        : '',
    });

    const { locationName, imgUrl, infoText } = inputs;

    const [rating, setData] = useState('3');
    const [stars, setstars] = useState('★★★☆☆');

    function addStar() {
        for(let i = 0 ; i < rating ; i++) {
            temp += '★';
        };
        for(let j = 5 ; j > rating ; j--) {
            temp += '☆';
        };
        setstars(temp);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
        addStar();
    };

    const handleStarts = (e) => {
        setData(e.target.value);
        addStar();
    };

    const handleRating = (e) => {
        setData(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();
        addCard(locationName, imgUrl, stars, rating, infoText, viewCount);
    };

    const addCard = () => {
        const newCard = {
            id              :   Date.now()  ,
            imgUrl          :   imgUrl      ,
            locationName    :   locationName,
            ratingStar      :   stars       ,
            rating          :   rating      ,
            info            :   infoText    ,
            viewCount       :   viewCount   ,
        };

        setCardLists([...cardLists, newCard]);
        console.log(`새 카드: ${JSON.stringify([...cardLists, newCard])}`);
    };

    return(
        <div className="addLoc-wapper">
            <form className="addLoc" onSubmit={handleSubmit}>

                <AddLocName 
                    handleChange={handleChange} 
                    locationName={locationName}
                />

                <ImgUrl
                    handleChange={handleChange}
                    imgUrl={imgUrl}
                />

                <InfoText
                    handleChange={handleChange}
                    infoText={infoText}
                />

                <Rating
                    rating={rating}
                    handleRating={handleRating}
                    handleStarts={handleStarts}
                />

                <div className="button-div">
                    <button type="submit">여행지 추가</button>
                </div>
            </form>
        </div>
    )
}