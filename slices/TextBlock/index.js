import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param { TextBlockProps }
 */
const TextBlock = ({ slice }) => (
  <section className='text-block'>
  </section>
)

export default TextBlock