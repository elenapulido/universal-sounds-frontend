import React from 'react';
import { getPosts } from "../../api/axios";
import { useState, useEffect } from 'react';

function SearchBar() {
    const [posts, setPosts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getPosts().then(json => {
            setPosts(json)
            return json
        }).then(json => {
            setSearchResults(json)
        })

    }, [])

    const content = ''

    return content
}

export default SearchBar
