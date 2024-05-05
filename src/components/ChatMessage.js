import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex m-2'>
      <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
          alt="profile"
        ></img>
        <p className='font-bold'>{name}</p>
        <p className='pl-2'>{message}</p>
    </div>
  )
}

export default ChatMessage
