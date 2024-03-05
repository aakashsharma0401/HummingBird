import React from 'react'
import "../../Styles/message.scss"


const Message = () => {
  return (  
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://media.istockphoto.com/id/1473711983/photo/university-tablet-and-campus-student-typing-internet-web-or-website-search-for-college.webp?b=1&s=170667a&w=0&k=20&c=LPhIpcyCjIweAILxehKYkyWehSzc4Uf8HM0rtfqgTIk=" alt="" />
        <span>Just Now</span>
      </div>
      <div className="messagecontent">
        <p className='pa'>Heloo</p>
        <img src="https://media.istockphoto.com/id/1473711983/photo/university-tablet-and-campus-student-typing-internet-web-or-website-search-for-college.webp?b=1&s=170667a&w=0&k=20&c=LPhIpcyCjIweAILxehKYkyWehSzc4Uf8HM0rtfqgTIk=" alt="" />

      </div>
       
      
    </div>
  )
}

export default Message
