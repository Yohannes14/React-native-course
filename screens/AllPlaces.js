import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import Placelist from '../components/places/Placelist';

const AllPlaces = ({route}) => {

const [loadedPlace, setLoadedPlace] = useState([]);
 const isFocused= useIsFocused();

  useEffect(() => {
    if(isFocused && route.params){
      setLoadedPlace(curPlaces  => [
        ...curPlaces, route.params.place
      ])
    }
  
  }, [isFocused, route]);

  return (
    <Placelist places ={loadedPlace} />
  )
}

export default AllPlaces;