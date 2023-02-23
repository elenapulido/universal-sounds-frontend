import React from 'react';
import { getVinils} from "../../api/axios";
import { useState, useEffect } from 'react';
import Bar from './Bar';

function SearchBar() {
    const [vinils, setVinils] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getVinils().then(json => {
            setVinils(json)
            return json
        }).then(json => {
            setSearchResults(json)
        })

    }, [])

    return (
        <div>
            <Bar vinils={vinils} setSearchResults={setSearchResults} />
        </div>
    )
}

export default SearchBar
