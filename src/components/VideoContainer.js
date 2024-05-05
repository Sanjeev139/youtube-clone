import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos();
  },[])

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items)
  }
  return (
    <div className='md:flex md:flex-wrap justify-between sm:overflow-x-hidden'>
      {videos.map(video => <Link to={"/watch?v="+video.id} key={video.id}><VideoCard info={video}></VideoCard></Link>)}
    </div>
  )
}

export default VideoContainer
