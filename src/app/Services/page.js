
// NOTE SERVICE;

"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Heading from "@/component/heading-component/heading";

const Services = () => {

    const router = useRouter();
    
    const Service = () => {
        router.push("/");
    }

    return(
        <>
        <Heading screenName = "Services"/>
        <button onClick={Service}>Back To Home</button>
        </>
    )
}

export default Services;