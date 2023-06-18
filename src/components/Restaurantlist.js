import React from 'react'
import { useState,useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Restaurantlist() {
    const [allrestaurant,setAllrestaurant]=useState([])

     //function to api call for datas inside json file

     const restaurantdata=async()=>{
    await fetch ('/restaurants.json').then(data=>{data.json().then(result=>{
        setAllrestaurant(result.restaurants)
    })
  })
     }

    //  console.log(allrestaurant);

     useEffect(()=>{
        restaurantdata()
     },[])
  return (

   
    <Row>
      {
        allrestaurant.map(item=>(

          <RestaurantCard data={item}/>
          ))
      }

    </Row>
  )
}

export default Restaurantlist