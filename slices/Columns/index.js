import React from 'react'
import { PrismicRichText, PrismicText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ColumnsSlice} ColumnsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ColumnsSlice>} ColumnsProps
 * @param { ColumnsProps }
 */
const Columns = ({ slice }) => {
  console.log(slice)
  return(
    <section className='columns-section'>
      {/* <div className='title'><PrismicText field={slice.primary.title}/></div> */}
      <div className='columns-wrapper'>
        {slice.items.map((item, i) => {
          return(
            <div className='column' key={`column${i}`}>
              <PrismicRichText field={item.column}/>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Columns