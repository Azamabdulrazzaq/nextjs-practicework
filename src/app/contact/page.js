
// "use client"
// import React from "react";
// import { useRouter } from "next/navigation";
// import Heading from "@/component/heading-component/heading";

// const Contact = () => {

//     const router = useRouter();
//     return (
//         <>
//             <Heading screenName="Contact" />
//             <button onClick={() => router.push("/")}>Back To Home</button>
//         </>
//     )
// }

// export default Contact;

"use client"
import React, { Component } from 'react';

class CounterCom extends Component {

    constructor() {
        super();

        this.state = {
            counter: 1,
        }
    };

    increaseCounter = () => {
        if (this.state.counter < 10) {
            this.setState({
                counter: this.state.counter + 1,
            })
        }
    }

    decreaseCounter = () => {
        if (this.state.counter > 1) {
            this.setState({
                counter: this.state.counter - 1,
            })
        }
    }

    render() {
        return (
            <>
                <h1>This is a Class Component</h1>

                <h1>The Count is {this.state.counter}</h1>
                <button onClick={this.increaseCounter}
                    disabled={this.state.counter < 10 ? false : true}
                >
                    Increase Counter</button>
                <button onClick={this.decreaseCounter}
                    disabled={this.state.counter > 1 ? false : true}
                >
                    Decrease Counter</button>
            </>
        );
    }
}

export default CounterCom;