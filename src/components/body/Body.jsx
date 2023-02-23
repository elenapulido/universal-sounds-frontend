import React, { useState, useEffect } from 'react';
import ButtonAdd from './ButtonAdd';

function Body() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('url_del_json')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <img src= "https://m.media-amazon.com/images/I/61B0IouivwL._SY355_.jpg" alt="" />
          <h3>{product.bandName}</h3>
          <h3>{product.albumName}</h3>
          <p>{product.price}</p>
          <ButtonAdd />
        </div>
      ))}
    </div>
  );
}

export default Body;