import React from 'react';
import logo from '../../assets/logo_records-01.png';
import icono from'../../assets/bolsa.png';
import SearchBar from '../search-bar/SearchBar';

const Header = () => {
  return (
    <header className="bg-gray-500 text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <img src={logo}  className="w-19 h-14" alt="Descripción de la imagen"/>
        {/* <form action="#" method="GET">
          <div className="flex items-center border rounded-md border-white bg-white">
            <input type="text" name="search" placeholder="Buscar..." className="py-2 px-4 w-full rounded-md" />
            <button type="submit" className="bg-gray-500 text-white py-2 px-4 rounded-md">Buscar</button>
          </div>
        </form> */}
        <SearchBar />
        <img src={icono} className="w-19 h-14" alt="Descripción de la imagen"/>
      </div>
    </header>
  )
}

export default Header