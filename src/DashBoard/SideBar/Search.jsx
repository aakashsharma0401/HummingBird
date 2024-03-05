import React from 'react'

const Search = () => {
  return (
    <div>
      <div className="search">
        <div className="searchForm">
            <input type='text' placeholder='Find a user'/>
            <hr/>
        </div>
        <div className="userchat">
            <img className='imgss' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <div className="userchatinfo">
                <span>Aakash</span>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Search
