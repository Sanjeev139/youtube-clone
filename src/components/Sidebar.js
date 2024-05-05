import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const data = useSelector(store => store.app.isMenuOpen);
  if(!data) return null;
  return (
    <div className='p-4 shadow-lg w-48'>
      <ul className='p-2'>
        <li><Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='p-2 font-bold'>You</h1>
      <ul className='p-2'>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>
      <h1 className='p-2 font-bold'>Subscriptions</h1>
      <ul className='p-2'>
        <li>Taarak Mehta Ka olltah Chasma</li>
        <li>The Screen Patti</li>
        <li>Sony SAB</li>
        <li>TVF</li>
      </ul>
      <h1 className='p-2 font-bold'>Explore</h1>
      <ul className='p-2'>
        <li>Trading</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  )
}

export default Sidebar
