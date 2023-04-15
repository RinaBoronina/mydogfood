import React from 'react';
import './cardList.css';
import Card from '../Card/Card';

export const CardList = ({ cards }) => {
    return (
        <div className="cards">
            {cards.map((elem) => {
                return <Card key={elem.name} product={elem} />;
            })}
        </div>
    );
};
