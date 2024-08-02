
"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Heading from "@/component/heading-component/heading";


const Feedback = () => {

    const router = useRouter();
    return (
        <>
            <Heading screenName="Feedback"/>
            <button onClick={() => router.push("/")}>Back To Home</button>
        </>
    )
}

export default Feedback;