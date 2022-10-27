import React, { useState, useEffect } from 'react';
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param { TextBlockProps }
 */
const TextBlock = ({ slice }) => {
  useEffect(() => {
    $( function() {
      $( `#text1` ).draggable();
    } );
    $( function() {
      $( `#text2` ).draggable();
    } );
  });
  console.log(slice)
  return(
    <section className='text-block' id={slice.primary.sectionid}>
      <PrismicRichText field={slice.primary.text}/>
    </section>
  )
}

export default TextBlock