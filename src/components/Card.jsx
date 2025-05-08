import React, { useState } from "react";
import '../styles/Card.css'
import Postmodal from "./model/Postmodal.jsx";
import Addloc from "./Addloc.jsx";
import CategoryButton from "./CategoryButton.jsx";
import CardList from "./CardList.jsx";
import { cardList } from "../data/Locations.jsx";

export default function Card() {
    const [postIdx, setpostIdx] = useState(-1);
    const [modal, setModal] = useState(false);
    const [cardLists, setCardLists] = useState(cardList)

    const [category, setCategory] = useState(
        ['아메리카', '유럽', '아시아', '아프리카', '오세니아']
    );


    const openModel = (modal) => {
        return( modal && <Postmodal cardLists={cardLists} setModal={setModal} postIdx={postIdx}/> )
    }

    return(
        <div>
            <Addloc cardLists={cardLists} setCardLists={setCardLists}/>
            <div className="card-div">
                <CategoryButton category={category} />
                {openModel(modal)}
                <CardList cardLists={cardLists} setCardLists={setCardLists} setModal={setModal} setpostIdx={setpostIdx}/>
            </div>
        </div>
    )
}