import React from 'react';
import '../App.css';
const CardItem = ({id,src, clickToOpen2,card, flipped, disabled}) => {

    const clickToOpen = () => {
        if (!disabled){
            clickToOpen2(card)
        }
    }

    return (
        <div className="cardItem" key={id}>
            <div className={flipped ? "flipped" : ""}>
                <img
                    className="frontSide"
                    src={src}
                    alt="frontSide"
                />
                <div
                    className="backSide"
                    onClick={clickToOpen}
                    style={
                    {width:"80px",
                        height:"100px",
                        backgroundImage:"url(../../public/backSide.png)",
                        backgroundPosition:"center",
                        backgroundSize:"cover"}}
                    alt="backSide"
                />
            </div>
        </div>
    );
};

export default CardItem;
