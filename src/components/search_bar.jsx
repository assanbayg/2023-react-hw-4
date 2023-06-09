import React from 'react'

function SearchBar() {
    return <div className="text-gray-600 border rounded-2xl">

        <input
            className="w-full h-10 p-4 rounded-2xl focus:outline-none"
            placeholder="Search character..."
        >
        </input>
    </div>
}

export default SearchBar