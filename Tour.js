import React, { useState } from 'react';

const Tour = ({id,image,info,price,name}) => {
  return <article className='single-tour'>
    {/* <img src='http://www.visitsoutheastengland.com/imageresizer/?image=%2fdbimgs%2fgardens.jpg&action=MediaGallery'/> */}
    <img src={image}></img>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
          {/* <h4 className='tour-price'>{price}</h4> */}
        </div>
        <p>{info}</p>
        <button className='delete-btn'>Not interested</button>
      </footer>
     

  </article>
};

export default Tour;
