import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
        <input
            className= 'pa3 ma3 ba b--green bg-lightest-blue'
            type = 'search'
            placeholder= 'search directory'
            onChange={searchChange}
        />
        </div>
    )


}
export default SearchBox