import React from 'react'
import Sidebar from './SideBar/Sidebar';
import Chat from './Chat/Chat';
import "../Styles/DashBoard.scss"

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <Sidebar/>
            <Chat/>

        </div>

        
      
    </div>


      

  )
}

export default Home
