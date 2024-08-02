
"use client"
import React, { useEffect, useState } from 'react'

const Users = () => {

  const [userName, setUserName ] = useState([]);
  const apiCall = () => {
    let apiUrl = "https://jsonplaceholder.typicode.com/users";

    fetch(apiUrl)
    .then((success) => {
      // console.log(success)
      return success.json();
    })
    .then((actualData) => {
      // console.log(actualData);

      if (actualData && actualData.length > 0) setUserName(actualData);
    })
    .catch((err)=> {
        console.log("something went wrong in fetch api" , err);
    })
  }

  useEffect(()=>{
    if (userName.length > 0) console.log("I got all Data");
    else apiCall();
  }, [userName])

  return (
    <>
    <h1>this is a Api Users</h1>
    <ul>
      {
        userName.map((item, index) => {
          return(
            <li key={index}>
              {item.name}
            </li>
          )
        })
      }
    </ul>

    </>
  )
}

export default Users;


// https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=86e6d80268a6cad371a61545fd9c4944