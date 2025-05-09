import React, { useEffect, useState } from "react";
import '../styles/Card.css'
import Postmodal from "./model/Postmodal.jsx";
import Addloc from "./Addloc.jsx";
import CategoryButton from "./CategoryButton.jsx";
import CardList from "./CardList.jsx";
import { cardList, category } from "../data/Locations.jsx";

export default function Card() {
    const [postIdx, setpostIdx] = useState(-1);
    const [modal, setModal] = useState(false);
    const [cardLists, setCardLists] = useState(cardList);
    const [categorys, setCategorys] = useState(category);
    const [selectedFilter, setSelectedFilter] = useState([]);
    
    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilter.includes(selectedCategory)) {
            // 한번 더 클릭했을때 원상 복구 기능
            let filter = selectedFilter.filter((el) => el !== selectedCategory);
            setSelectedFilter(filter);
        } else {
            setSelectedFilter([...selectedFilter, selectedCategory]);
            console.log(selectedFilter)
        }
    }

    const openModel = (modal) => {
        return( modal && <Postmodal cardLists={cardLists} setModal={setModal} postIdx={postIdx}/> )
    }

    useEffect(() => {
        filterLocation();
    }, [selectedFilter]);

    const filterLocation = () => {
        if (selectedFilter.length > 0) {
            let tempItems = selectedFilter.map((selectedCategory) => {
                let temp = cardList.filter((List) => List.category === selectedCategory);
                return temp;
            });
            setCardLists(tempItems.flat());
        } else {
            setCardLists([...cardList])
        }
    }

    return(
        <div>
            <Addloc 
             cardLists={cardLists} 
              setCardLists={setCardLists}
               categorys={categorys}
            />
            <div className="card-div">

                <CategoryButton
                 categorys={categorys}
                 handleFilterButtonClick={handleFilterButtonClick}
                />

                {openModel(modal)}
                <CardList cardLists={cardLists}
                 setCardLists={setCardLists}
                  setpostIdx={setpostIdx}
                   setModal={setModal}
                />
            </div>
        </div>
    )
}