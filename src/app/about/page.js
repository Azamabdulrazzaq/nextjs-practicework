
"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Heading from "@/component/heading-component/heading";

const About = () => {

    const router = useRouter()
    return(
        <>
        <Heading screenName = "About"/>
        <button onClick={() => router.push("/")}>Back To Home</button>
        </>
    )
}

export default About;