import React from 'react'

export default function Rating({rating, handleRating, handleStarts}) {
    return(
        <div className="input-div">
            <label htmlFor="rating"><span>평점(1-5)</span></label>
            <div className="input-div-div">
                <input onChange={handleRating}
                 onClick={handleStarts}
                  value={rating} id="rating" 
                  type={"range"} min={"1"} max={"5"}
                />
                <span>{rating}</span>
            </div>
        </div>
    )
}