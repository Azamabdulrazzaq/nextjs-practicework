
// "use client"

// import React, { useState } from 'react'

// const WeatherApp =  () => {

//     const [location, setlocation] = useState("");

    
//     const weatherApi = async()=>{
//         const api_url = "http://api.openweathermap.org/data/2.5/weather?q=karachi&appid=f7dd5f65195d863069e051cef5e0e2ec&units=imperial"

//         if(location){
//             try{const response = await fetch(api_url)
//                 const data = response.json()
//                 console.log(data);

//             }
//             catch(err){
//                 console.log("somthing went wrong", err);
//             }
//         }

//     }


//     return (
//         <>
//             <h1 className='Heading'></h1>
//             <nav className="main-1">
//                 <div className='container'>
//                     <div className='input-1'>
//                         <input className='input'
//                             type='text'
//                             placeholder='Country & City Name'
//                             onChange={(e) => {setlocation(e.target.value)}}
//                             value={location}
//                         />
//                     </div>
//                     <button
//                         className='btn-1'
//                         onClick={weatherApi}
//                     >
//                         Search
//                     </button>
//                     <div className='data-renderd'>
//                         <div className='location-1'>
//                             centigrate
//                         </div>
//                         <div>
//                             Temp
//                         </div>
//                         <div>
//                             location
//                         </div>
//                         <div>
//                             Humanity
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default WeatherApp;
