import React from "react";
import styles from './Menu.module.css';

function Menu(props){

    return(
        <div className={styles.container}>
           {props.options.map((option) => <div key={option} className={styles.options} ><input type="radio" /> <label>{option}</label></div>)} 
        </div>
    );
};

export default Menu;