
export default function CardList({cardLists, setpostIdx, setModal}) {
    const modalHandler = () => {
        setModal(true);
    }
    
    const visit = (idx) => {
        modalHandler();
        setpostIdx(idx);
        cardLists[idx].viewCount++;
        console.log(JSON.stringify(cardLists[idx]) + " " + idx);
    }

    return(
        <div className="card-list">
            {cardLists.map((it, idx) => (
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
                        onClick={() => {
                            visit(idx)
                        }}
                        >상세정보</button>
                    </div>
                </div>
            ))}
        </div>
    )
}