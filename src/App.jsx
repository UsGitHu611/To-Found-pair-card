import React, {useEffect, useState} from 'react';
import './App.css';
import UIButton from "./components/UI/Button/UIButton.jsx";
import cardList from "./cardList.js";
import "../public/backSide.png";
import CardItem from "./components/CardItem.jsx";

const App = () => {

    const [cards, setCards] = useState([]);
    const [turn, setTurn] = useState(0);
    const [openOne, setOpenOne] = useState(null);
    const [openTwo, setOpenTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    
    const shuffleCards = () => {
        const shuffleCard = [...cardList, ...cardList]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}));
        setCards(shuffleCard);
        setTurn(0);
    }

    const  clickToOpen = (card) => {
        openOne ? setOpenTwo(card) : setOpenOne(card)
    }

    useEffect(() => {

        if (openOne && openTwo){
            setDisabled(true);
            if (openOne.src === openTwo.src){

                setCards(prevState => prevState.map(card => {
                    if (card.src === openOne.src){
                        return {...card, statusMatch: true}
                    }
                    else {
                        return card
                    }
                }))
                resetTurn();
            }else {
                setTimeout(() => resetTurn(),1500)
            }
        }
    }, [openOne,openTwo]);

    const resetTurn = () => {
        setOpenOne(null);
        setOpenTwo(null);
        setTurn(prevState => prevState + 1)
        setDisabled(false);
    }

    return (
        <div>
            <div style={{margin:"20px 0"}}>
            <h1 style={{fontSize:"40px"}}>Two Pair</h1>
            <UIButton onClick={shuffleCards}>
                New Game
            </UIButton>
            </div>
            <div className="card-grid">
                {cards.map(card => (
                    <CardItem
                        key={card.id}
                        src={card.src}
                        card={card}
                        clickToOpen2={clickToOpen}
                        flipped={card === openOne || card === openTwo || card.statusMatch}
                        disabled={disabled}
                    />
                ))}
            </div>
        </div>
    );
};

export default App
