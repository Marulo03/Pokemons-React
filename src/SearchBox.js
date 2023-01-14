import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div>
            <input className='pa3 ba b--orange bg-lightest-blue'
                   type='search'
                   placeholder='search pokemons'
                   onChange={searchChange}
                />

       </div>
    )
}

export default SearchBox;