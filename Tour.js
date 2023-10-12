import React, { useState } from 'react';


const Tour = ({id,image,info,price,name,removeTour}) => {

  const [redMore,setReadmore]=useState(true);
  
  return <article className='single-tour'>
    {/* <img src='http://www.visitsoutheastengland.com/imageresizer/?image=%2fdbimgs%2fgardens.jpg&action=MediaGallery'/> */}
    <img src={image}></img>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
          {/* <h4 className='tour-price'>{price}</h4> */}
        </div>
        <p>{redMore?info:`${info.substring(0,200)}...`}
        <button onClick={()=>{setReadmore(!redMore)}}>{redMore?'Read More':'Show less'}</button></p>
        <button className='delete-btn' onClick={()=>removeTour(id)}>Not interested</button>
      </footer>
     

  </article>
};

export default Tour;
