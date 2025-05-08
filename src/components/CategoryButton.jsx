import React from 'react'

export default function CategoryButton({category}) {
    return(
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
    )
}