import React from "react";

export default function Item({ item, onItemClick }) {
    return (
        <div className='item' onClick={() => onItemClick(item.id)}>
            <img className='item-image' src={item.img1} alt={item.name} />
            <div className='item-content'>
                <h3 className='item-name'>{item.name}</h3>
                <p>
                    <span id='detail-item'>Nombre: </span>
                    <span>{item.name}</span>
                </p>
                <p>
                    <span id='detail-item'>Nombre original: </span>
                    <span>{item.original}</span>
                </p>
                <p>
                    <span id='detail-item'> Capitulo: </span>
                    <span>{item.cap}</span>
                </p>
          
            </div>
        </div>
    );
}
