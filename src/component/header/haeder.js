
import React from "react";

import Link from "next/link";

const Header = () => {
    // console.log("Props of navebar components" , children)
    return(
        <>
            <div>
                {/* {Navigation section} */}
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/Services"}>Services</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                    <li><Link href={"/Feedback"}>Feedback</Link></li>
                    <li><Link href={"/other"}>Others</Link></li>
                    <li><Link href={"/user"}>User</Link></li>
                    <li><Link href={"/image-slider"}>Sliders</Link></li>


                </ul>
                {/* {Data Section} */}
              {/* <div>
              {children}
              </div> */}
            </div>
        </>
    )
}

export default Header;