import React, { useState, useEffect } from 'react';
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ImagesSlice} ImagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImagesSlice>} ImagesProps
 * @param { ImagesProps }
 */

const Images = ({ slice }) => {

  useEffect(() => {
    for (let i = 0; i < slice.items.length; i++) {
      $( function() {
        $( `#draggable${i}` ).draggable();
      } );
    }
  });
  
  return(
    <section className='images-section'>
      {slice.items.map((item, i) => {
        return(
          <div className='draggable-image' key={`image${i}`} id={`draggable${i}`}>
            <img src={item.image.url}/>
          </div>
        )
      })}
    </section>
  )
}

export default Images