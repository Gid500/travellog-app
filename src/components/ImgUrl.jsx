import React from 'react'

export default function ImgUrl({handleChange, imgUrl}) {
    
    return(
        <div className="input-div">
            <label htmlFor="imgUrl"><span>이미지 URL (선택사항)</span></label>
            <input onChange={handleChange} value={imgUrl} name="imgUrl" type="text" placeholder="https://example.com/image.jpg"/>
        </div>
    )
}