import React from "react";
import Item from "./Item";

export default function Listado ({DataPersonajes, onItemClick}){
    
    return(
        <div className='listado'>
            <div className='item-list'>
                {DataPersonajes.map((item) => (
                    <Item key={item.id} item={item} onItemClick={onItemClick}/>
                ))}
            </div>
        </div>
    );
}
