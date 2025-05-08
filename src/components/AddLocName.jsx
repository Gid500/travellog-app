import React from 'react'

export default function AddLocName({handleChange, locationName}) {
    return(
        <div className="input-div">
            <h3 className="addLocH3">새로운 여행지 추가</h3>
            <label htmlFor="locName"><span>여행지 이름</span></label>
            <input onChange={handleChange} value={locationName} name="locationName" type="text" placeholder="예: 파리"/>
        </div>
    )
}