import React from 'react'

const Suggest = ({info}) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
  
  
    return (
    <div className="p-2 m-2 w-45 h-65 shadow-lg bg-slate-300">
        <div className="grid grid-cols-2 ">
           
        <div><img className="rounded-lg " alt="thumbnail" src={thumbnails.default.url} /></div>
        <p className="font-semibold py-1">{title}</p><br/>
        <p className="font-bold">{channelTitle}</p>
     
   
    
    </div>
  </div>
  )
 
}

export default Suggest;
