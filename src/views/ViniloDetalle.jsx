import React from 'react';
import Navbar from '../components/navbar/Navbar';
import './ViniloDetalle.css';
import Portada from "../views/images/18.png";

function ViniloDetalle() {
  return (
    <>
        

      
<div class="relative p-4 bg-white dark:bg-gray-800" id='vistaDetalle'>
    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
    <div class="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1" id='portadaAlbum'>
            
            <img src={Portada} alt="logo" className="portadaVinilo" />
        </div>
        <div class="lg:col-start-2 md:pl-20">
            <h4 class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
                Detalle del vinilo
            </h4>
            <ul class="mt-10">
                <li>
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 text-white  rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
</svg>

                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                Nombre de la banda
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='bandName'>
                            The Velvet Underground
                            </p>
                        </div>
                    </div>
                </li>
                <li class="mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 text-white rounded-md">
                                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                               Album Name
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='albumName'>
                              The Velvet Underground & Nico
                            </p>
                        </div>
                    </div>
                </li>
                <li class="mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 text-white  rounded-md">
                                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                Género
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='genre'>
                               POP ROCK
                            </p>
                        </div>
                    </div>
                </li>
                <li class="mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 text-white  rounded-md">
                                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                Precio
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='price'>
                               25,78€
                            </p>
                        </div>
                    </div>
                </li>
                <li class="mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 text-white  rounded-md">
                                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                Descripción
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='description'>
                            The Velvet Underground & Nico es el primer álbum de estudio de la banda estadounidense The Velvet Underground, lanzado en 1967 con la colaboración en las voces de la cantante alemana Nico. Su grabación se efectuó en Nueva York y Hollywood entre abril y mayo de 1966 bajo la dirección del líder del movimiento pop art, el estadounidense Andy Warhol, aunque no se acreditó a Norman Dolph y John Licata, responsables de las sesiones en Nueva York,5​ y a Tom Wilson, que en palabras del propio bajista de la banda John Cale fue el productor de casi todas las canciones.6​ Pese a que se grabó en 1966, no salió a la venta hasta el 12 de marzo de 1967 por distintos problemas primero por la censura y posteriormente de realización por la inusual portada, pese a esto lo editó el sello discográfico de jazz Verve Records, propiedad de la Metro-Goldwyn-Mayer.
                            </p>
                        </div>
                    </div>
                </li>
                <li class="mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 text-white  rounded-md">
                                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                Etiquetas
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300" id='imatags'>
                               POP ROCK
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="product_meta singletags">

	
	
		

	
	<span class="posted_in" id='categoria'>Category: <a href="https://oldrecords.com.br/categoria-produto/funk-soul-jazz/" rel="tag">Funk / Soul / Jazz</a></span>
	<span class="tagged_as" id='tags'>Tags: <a href="https://oldrecords.com.br/produto-tag/12-single/" rel="tag">12" / Singles / Mix / Promo</a> <a href="https://oldrecords.com.br/produto-tag/importados/" rel="tag">Importados</a></span>
	
</div>
        </div>
       
    </div>
</div>


 <div id='playAlbum' class="relative overflow-x-auto shadow-md sm:rounded-lg">
 spotify
 <iframe  src="https://open.spotify.com/embed/album/4xwx0x7k6c5VuThz5qVqmV?utm_source=generator" width="50%" height="352"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
 </div>
    </>
  )
}

export default ViniloDetalle
