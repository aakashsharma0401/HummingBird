import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
     
      <span className='logo'>HummingBird</span>
      <div className="user">
        <img className='imgs' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'alt=''/>
        <span>Aakash</span>
        <button className='button' >Logout</button>
      </div>
     
      </div>
  )
}

export default Navbar
