import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import CommentsContainer from './CommentsContainer'
import Intro from './Intro'
import LiveChat from './LiveChat';
import VideoSuggestions from './VideoSuggestions'

const WatchPage = () => {

  const [searchParams] = useSearchParams();

  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[])
  
    return (
      <div className="flex flex-col w-full">
        <div className="px-5 flex w-full">
          <div >
            <iframe
              width="1150"
              height="600"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full">
            {/* /* <LiveChat /> */ }
            <VideoSuggestions/>
          </div>
        </div>
       
        <CommentsContainer />
      </div>
    );
  };
  
  export default WatchPage;
  