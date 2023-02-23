import React from 'react';

const Bar = ( {vinils, setSearchResults}) => {
        const handleSubmit = (e) => e.preventDefault()

        const handleSearchChange = (e) => {
            if (!e.target.value) return setSearchResults(vinils)

            const resultsArray = vinils.filter(vinil => vinil.bandName.includes(e.target.value) || vinil.genre.includes(e.target.value) || vinil.albumName.includes(e.target.value) )

            setSearchResults(resultsArray)
        }

    return (
        <div>
            <form onSubmit={handleSubmit} action="#" method="GET">
                <div className="flex items-center border rounded-md border-white bg-white">
                    <input 
                        type="text"
                        id="search"
                        onChange={handleSearchChange} 
                        name="search" 
                        placeholder="Buscar..." 
                        className="py-2 px-4 w-full text-black rounded-md" 
                    />
                    <button 
                        type="submit" 
                        className="bg-gray-500 text-white py-2 px-4 rounded-md">
                            Buscar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Bar
