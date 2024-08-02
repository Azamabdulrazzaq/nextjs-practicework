"use client"
import React, { useEffect, useState } from 'react'

import Image from 'next/image';


import img1 from "@/images/flower.jpg"
import img2 from "@/images/flower1.jpg"
import img3 from "@/images/flower2.jpg"
import img4 from "@/images/flower3.png"
import img5 from "@/images/flower4.jpg"

const arr = [img1 , img2 , img3 , img4 , img5];



const App = () => {
    let [count, setCount] = useState(0);
    let [slider, setSlider] = useState(arr);

    const counter = () => {
        setTimeout(() => {
        if(count == slider.length - 1) setCount(0);
           else setCount(count+1)
        }, 1000);
        
    }
    
    useEffect(() => {
        counter();
    }, [count]);

    return (
        <>

            <h1>Image Slider in Next js</h1>
             <h2>counter : {slider[count]}</h2> 

            <Image style={{margin : "20px"}}
            src={slider[count]}
            alt='images-render'
            priority={true}
            height={400}
            width={1200} 
            />
        </>
    )
}

export default App;