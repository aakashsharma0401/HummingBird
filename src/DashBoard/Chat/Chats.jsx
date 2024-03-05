import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userchat">
            <img className='imgss' src='data:image/jpeg;base64,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'/>
            <div className="userchatinfo">
                <span style={{fontSize:'18px',fontWeight:"500"}}>Aakash</span>
                <p style={{fontSize:"14px",color:"lightgray"}} >How are you</p>
            </div>
        </div>
        <div className="userchat">
            <img className='imgss' src='data:image/jpeg;base64,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'/>
            <div className="userchatinfo">
                <span style={{fontSize:'18px',fontWeight:"500"}}>jesyt</span>
                <p style={{fontSize:"14px",color:"lightgray"}} >How are you</p>
            </div>
        </div>
        <div className="userchat">
            <img className='imgss' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtDZAvImObxjDKS11-n0-BwpvuEEZbiIYC3qbUAorUHLBf7yz8THOXt5v67PNtv6anpE&usqp=CAU'/>
            <div className="userchatinfo">
                <span style={{fontSize:'18px',fontWeight:"500"}}>Asda</span>
                <p style={{fontSize:"14px",color:"lightgray"}} >where are you</p>
            </div>
        </div>
        <div className="userchat">
            <img className='imgss' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2bcBC2rxeYymW9_yJ1xbxz8tmAn--t7_NCVGlirSsgKXXCff9aCyV82uXVmTSEB8GO-A&usqp=CAU'/>
            <div className="userchatinfo">
                <span style={{fontSize:'18px',fontWeight:"500"}}>Aasdd</span>
                <p style={{fontSize:"14px",color:"lightgray"}} >what's up</p>
            </div>
        </div>
    </div>
  )
}

export default Chats
