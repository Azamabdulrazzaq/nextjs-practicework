
import React from "react";

const Heading = (props) => {
    console.log("props of header components" , props);

    let {screenName} = props;

    return(
        <>
        <h1>{`${screenName} Screen`}</h1>
        </>
    )
}

export default Heading;