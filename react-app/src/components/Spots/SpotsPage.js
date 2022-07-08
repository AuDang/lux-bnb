import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSpots } from '../../store/spot';
import { useHistory } from 'react-router-dom';
import './SpotsPage.css'
import { NavLink } from 'react-router-dom';

const SpotsPage = () => {
   const spots = useSelector(state => state.spotReducer)
   const spotsArr = Object.values(spots)
   console.log('spots', spotsArr)
   const history = useHistory()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllSpots())
   },[dispatch])

   return (
      <div className='spots-page-container'>
      {spotsArr.map(spot => (
         <div key={spot.id}>
            <div className='all-spots-image'> 
               <NavLink exact to={`/spots/${spot.id}`}>
                  <img className='single-spot-image'src={spot.images[0].image}/>
               </NavLink>
            </div>
            <div className='all-spots-info'>
               <div>
                  <p>{spot.city}, {spot.state}</p>
               </div>
               <div>
                  <p>{spot.name}</p>
               </div>
               <div>
                  <p>${spot.price}/Night</p>
               </div>
            </div>
            <div>
               
            </div>
         </div>
         
      ))}
      </div>
   )
}

export default SpotsPage