import React from 'react';
import Card from "./Card"
import data from "../data";
import Nav from "./Nav"

export default (() => {
    const cards = data.map((item) => {
        return <Card 
            key = {item.id}
            {...item}
        />;
    })

    return(
        <div className='container'>   
            <Nav />
            <div className = 'card-container'>
                {cards}
            </div>
        </div>
    )
})