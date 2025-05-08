import React from 'react'

export default function InfoText({handleChange, infoText}) {

    return(
        <div className="input-div">
            <label htmlFor="infoText"><span>설명</span></label>
            <textarea onChange={handleChange}
            value={infoText}
            name="infoText"
            placeholder="이 여행지에 대한 설명을 작성하세요">
            </textarea>
        </div>
    )
}