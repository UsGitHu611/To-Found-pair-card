import React from 'react';
import style from './UIButton.module.css';
const UIButton = (props) => {
    return (
        <button {...props} className={style.btn}>
            {props.children}
        </button>
    );
};

export default UIButton;
