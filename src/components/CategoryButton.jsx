import React from 'react'

export default function CategoryButton({categorys, handleFilterButtonClick}) {
    return(
        <div className="mainContentDiv">
            <h4>인기 여행지</h4>
            <div className="category-div">
                {categorys.map((category, idx) => (
                    <button key={idx}
                        onClick={() => handleFilterButtonClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}