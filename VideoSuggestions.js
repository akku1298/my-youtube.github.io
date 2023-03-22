import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/contants';
import { Link } from "react-router-dom";
import Suggest from './Suggest';


const VideoSuggestions = () => {
    const[suggestionVideo,setSuggestionVideo]=useState([]);
   
 
 
    useEffect(()=>{
   getSuggestion();
 },[])

  const getSuggestion= async()=>{
    const data= await fetch(YOUTUBE_VIDEOS_API);
    const json= await data.json();
    console.log(json);
    setSuggestionVideo(json.items);

  }  
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      <div className="flex flex-wrap">
        {suggestionVideo.map((video)=>(
         <Link key={video.id} to={"/watch?v=" + video.id}>
         < Suggest info={video} />
       </Link>
        ))}
      </div>
      
    </div>
  )
}

export default VideoSuggestions
