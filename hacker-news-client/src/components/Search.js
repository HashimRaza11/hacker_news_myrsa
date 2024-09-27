import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search stories..."
                className="border p-2 rounded-md w-80"
            />
            <button 
                type="submit" 
                className="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer transition duration-200"
            >
                Search
            </button>
        </form>
    );
};

export default Search;
