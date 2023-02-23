import React from 'react';

import Navbar from '../components/navbar/Navbar';
import './Home.css';
import ViniloDetalle from './ViniloDetalle';

import Header from '../components/header/Header';




export default function Home() {

    return (
        <div>

            <Navbar />
             <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <ViniloDetalle />

            <Header />

        </div>
    );
}