import React from 'react'
import './styles/residentCard.css'
  
export const LocationInfo = ({location}) => {

  


  return (
   <article>
    <h2 className='location__name'>{location?.name}</h2>
    <ul className='location__list'>
      <li><span>Type: </span>{location?.type}</li>
      <li><span>Dimension:</span>{location?.dimension}</li>
      <li><span>Population:</span>{location?.residents.length}</li>
    </ul>
   </article>
  )
}
export default LocationInfo