import React from 'react';



const Filter = ({setSearchTerm}) => {
    
   
  return (
    <div className="filter-container">
        <input type="text" placeholder='Search...'
        onChange={(event) => {
            setSearchTerm(event.target.value);}} />
    </div>
  )
}

export default Filter
