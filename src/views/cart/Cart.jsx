import React from 'react'
import Header from '../../components/header/Header'
import vinilo1 from'../../assets/06.jpg'




function Cart() {
  return (
    <div>
        <Header/>
        
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl marginb">
        <img src={vinilo1}  className="w-142 h-96 mx-auto flex justify-center " alt="Descripción de la imagen"/ >
         <div class="md:flex">
    <div class="md:flex-shrink-0">
    
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Producto</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">The
        Beatles</a>
      <p class="mt-2 text-gray-500">Descripción del producto.</p>
      <div class="mt-2">
        <span class="text-gray-500">$33.15</span>
        
      </div>
      <div class="mt-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="quantity">Cantidad:</label>
        <div class="relative">
          <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="quantity">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M2 10C2 5.03 6.03 1 11 1s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9zm16 0c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7 7-3.14 7-7zm-2 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"/></svg>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <button class="bg-gray-900 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Borrar
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Cart