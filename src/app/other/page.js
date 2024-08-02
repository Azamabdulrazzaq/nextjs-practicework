
"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Heading from "@/component/heading-component/heading";

const Others = () => {

    const router = useRouter()

    return(
        <>
        <Heading screenName = "Others"/>
        <button onClick={() => router.push("/")}>Back to Home</button>
        </>
)
}

export default Others;