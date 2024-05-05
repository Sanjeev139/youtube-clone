import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "News", "Trending", "Kishore Kumar", "Ghazal", "Computer Programming"]
  return (
    <div className='flex sm:w-auto sm:wrap flex-wrap'>
      {list.map((name) => (<Button key={name} name={name}></Button>))}
    </div>
  )
}

export default ButtonList
