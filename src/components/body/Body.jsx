import React, { useState, useEffect } from 'react';
import ButtonAdd from './ButtonAdd';
import Json from './Json';
import Foto from './img/10.png'
import './Body.css';

function Body() {

  const cards = Json

  return (
    <div className= "ContainerCards">
      <div className="Cards">
        {cards.map(product => (
          <div key={product.id}>
            <img src={Foto} alt="" />
            <h3>{product.bandName}</h3>
            <h3>{product.albumName}</h3>
            <p>{product.price}</p>
            <ButtonAdd />
           </div>
        ))}
      </div>
     
    </div>

  );
}

export default Body;