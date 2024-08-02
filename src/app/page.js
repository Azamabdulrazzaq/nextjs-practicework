// import Image from 'next/image'
// import styles from './page.module.css'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.js</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore starter templates for Next.js.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }

// import Listitems from "@/component/listitems";
// import  Listitems1 from "@/component/listitems";


// const arr1 = ["azam", "ali", "ahmed", "zeeshan", "ahsan"];
// let fruits = ["apple", "banana", "kino", "amrood", "pinaple"];


// const App2 = () => {

//   return (
//     <ul>
//       {
//         fruits.map((item, index) => {
//           return (
//             <Listitems1
//               key={index}
//               fruits={item}
//             />
//           )
//         })
//       }
//     </ul>
//   )

// }

// export default App2;

// const App = () => {

//   return (
//     <ul>
//       {
//         arr1.map((item, index) => {
//           return (
//             <Listitems
//               key={index}
//               names={item}
//             />
//           )
//         })
//       }
//     </ul>
//   )

// }

// export default App

// import Firstcomponent from "@/component/componentjsfile/Header component";

// import React  from "react";
// import { obj , arr , namearr } from "./test";

// const App1 = () => {
//   // console.log("object" , obj);
//   // console.log("Array" , arr);
//   console.log(namearr);

// return(
//   <div>
//         <h1>Wellcome to react js</h1>
//         <h2>Hello react js </h2>
//         <h2>Hello Next js </h2>

//   </div>
//   // )
//             // passing data from one componenet to another componenet is called props;
//   return(
//     <>
//        {/* <h1>Wellcome to react js</h1>
//           <h2>Hello react js </h2>
//           <h2>Hello Next js </h2>
//           <h2>My name is {obj.firstname} {obj.lastname}</h2> */}
//           {/* <h1>First component</h1> */}
//           <Firstcomponent Heading = "First Component" />
//           <ul>
//             {
//               namearr.map((item , index) => {

//                 return(
//                   <li key={index}> {index + 1} : {item}</li>
//                 )
//               })
//             }
//           </ul>

//     </>
//   )
// }

// export default App1;



// const { useState } = require("react")

// import React, { useState } from "react";


// const App = () => {

//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Counter Game</h1>
//       <h2>Conter : {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Use Counter</button>

//     </>
//   )

// }


// export default App;


// const App = () => {
//   const [count, setCount] = useState(0);


//   return(
//     <>
//       <h1>Counter Game</h1>
//       <h2>Counter : {count}</h2>
//       <button onClick={() =>  setCount(count + 1)}>Click me</button>
//     </>
//   )
// }

// export default App;


// const App = () => {
//   const [count, setCount] = useState(0);

//   return(
//     <>
//       <h1>Counter Game</h1>
//       <h2>Conter : {count}</h2>
//     <button onClick={() => setCount(count + 1)}> Click me</button>
//     </>
//   )
// };

// export default App;




// import React from "react";


// const App = () => {
//   const [count, setCount] = useState(0);


//   return(
//     <>
//       <h1>Counter Game</h1>
//       <h2>Count : {count}</h2>
//       <button onClick={() => setCount(count + 1)}> Click Me</button>
//     </>
//   )
// };

// export default App;

// "use client"

// const App = () => {

//   let count = 0;

//     // const clickhandller = () => {
//     //   console.log("click handller is working");
//     // }
//     // let Booleanval = false;

//     const clickcounter = () => {


//       // count = count + 1;
//       // console.log(count);
//       // let Booleanvalue = true;
//       // Booleanval = !Booleanval;
//       // console.log(Booleanval);
//     }

//   return(
//     <>
//       <h1> Next js class</h1>

//       <button onClick={clickcounter}>click me</button>

//       {/* {<button onClick={clickhandller}> Click </button>} */}
//     </>
//   )
// };

// export default App;

// "use client"
// import React , {useState} from "react";

// const App = () => {

//   const [count, setCount] = useState(0);
//   return(
//     <>
//       <h1> Next js class</h1>
//       <p>you clicked mouse {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </>
//   )
// };

// export default App;


// "use client"
// import React , {useState} from "react";


// import Headingcomponent from "@/component/listitems";


// const App = () => {

//   const [count, setCount] = useState(0);

//   let [disablePlusBtn, setdisablePlusBtn] = useState(false);
//   let [disableMinusBtn, setdisableMinusBtn] = useState(false);


//   const increamenthandler = () => {
//     setCount(count + 1)
//     setdisableMinusBtn(false);
//     if(count >= 9)setdisablePlusBtn(true);
//   };

//   const decreamenthandler = () => {
//     setCount(count - 1);
//     setdisablePlusBtn(false);
//     if(count <= 1)setdisableMinusBtn(true);  
//   };

//   return(
//     <>
//       <Headingcomponent Heading = "Next js task" />
//       <p>you clicked mouse {count} times</p>
//       <button 
//       onClick={increamenthandler}
//       disabled= {disablePlusBtn}
//       >
//         Increament Counter
//         </button>
//       <button 
//       onClick={decreamenthandler}
//       disabled={disableMinusBtn}
//       >
//       Decreament Counter
//       </button>
//     </>
//   )
// };

// export default App;

// "use client"
// import React, { useState } from "react";
// import Image from "next/image";
// import Bulboffimg from "@/app/images/offbulb.png" ;
// import Bulbonimg from "@/app/images/onbulb.png";



// const Bulbimages = () => {
//   const [Bulb, setBulb] = useState(true);
//   const [Heading, setHeadingText] = useState("off");

//   const Imagehandler = () => {
//       setHeadingText(Bulb ? " on" : " off");
//     setBulb(!Bulb);
//     // if (Bulb == true) setBulb(false);
//   }



//   return (
//     <>
//       <h1>Now Bulb is  {Heading}</h1>
//       <Image
//         src={Bulb ? Bulboffimg : Bulbonimg}
//         height={300}
//         width={300}
//         alt="Image-change"
//         priority={true}
//       />

//       <button onClick={Imagehandler}>Image Change</button>
//     </>
//   )

// };

// export default Bulbimages;

// bulb task is completed;

// "use client"
// import React, { useState } from "react";
// import Image from "next/image";
// import Bulboffimg from "@/app/images/offbulb.png" ;
// import Bulbonimg from "@/app/images/onbulb.png";


// const App = () => {
//   const [bulbStatus, setBulbStatus] = useState(true);

//   const Bulbhandler = () => setBulbStatus(!bulbStatus);


//   return (

//     <>
//       <h1>{`Bulb ${bulbStatus ? "OFF" : "ON"}`}</h1>

//       <Image
//         src={bulbStatus ? Bulboffimg : Bulbonimg} 
//         width={300}
//         height={300}
//         alt="Bulb image"
//         priority={true}
//        />

//        <button onClick={Bulbhandler}>
//         {`${!bulbStatus ? "OFF" : "ON"}`}
//        </button>
//     </>
//   )
// }

// export default App;


// its call conditional rendering;
// "use client"
// import React, { useState } from "react";
// import Image from "next/image";
// import Bulboffimg from "@/app/images/offbulb.png" ;
// import Bulbonimg from "@/app/images/onbulb.png";


// const App = () => {
//   const [heading, setheading] = useState(false);

//   const  changElement = () => setheading(!heading);

//   return (
//     <>
//         <h1>conditional rendring in React js </h1>
//       {

//         (heading)
//         ?
//         (<h2>Learn React js for advance web and app development</h2>)
//         :
//         (<h2>Learn Next js instead of React js</h2>)
//       }
//     <button onClick={changElement}> CHANGE ELEMENT</button>
//     </>
//   )
// }
// export default App;


// const App = () => {

//   const [visibleEL, setVisibleEl] = useState(false);
//   const [InputVal, setInputVal] = useState("");


//   const inputHandler = () => {
//     console.log(InputVal);
//     setInputVal("");
//   }
//     return (
//     <>
//         <h1>Control Component and Uncontrol component</h1>

//         <input 
//           type="text"
//           placeholder="Write Somthing" 
//           value={InputVal}
//           onChange={(e) => {
//             // console.log(e.target.value)
//             setInputVal(e.target.value);
//           }}
//         /> 

//         <button onClick={inputHandler}>Submit</button>
//     </>
//   )
// }
// export default App;


// const App = () => {

//     const [InputVal, setInputVal] = useState("")

//     const inputHandler = () => {
//       // console.log(InputVal);
//       // setInputVal("");
//     }
//   return(
//     <>
//       <h1>input value control and Uncontrol</h1>

//       <input
//         type="text"
//         placeholder="Write a text"
//         value={InputVal}
//         onChange={(e) => {
//           setInputVal(e.target.value);
//         }}
//        />

//       <button onClick={inputHandler}>Submit</button>
//     </>
//   )
// }

// export default App;

// Note TODOLIST IN REACYT JS;


// "use client"
// import React, { useState } from "react";
// import styles from "@/styles/App-module.css"


// const App = () => {

//   const [inputVal, setInputVal] = useState("");
//   const [todoList, setTodoList] = useState([])
//   const [editIs, setEditIs] = useState(false);
//   const [targetkey, setTargetkey] = useState("");

//   const inputHandler = () => {
//     let fetchData = [...todoList];
//     fetchData.push(inputVal);
//     setTodoList(fetchData);
//     setInputVal("");
//   }

// // note delete add items;

// // const removeItem = (i) => {
// //   // console.log("index" , i);
// //   const listremove = todoList.filter((items, index) => i !== index);
// //   setTodoList(listremove);
// //   // console.log(listremove);
// // }

// // note delete add items;

// const removeItem = (key) => {
//   const removelist = [...todoList];
//   removelist.splice(key, 1);
//   setTodoList(removelist);
// }

// // note edit add items;

// // const edititems = (key) => {
// //   const display = prompt("Enter any thing")
// //   const editarr = [...todoList];
// //   // editarr.splice(key, 1, display);
// //   // setTodoList(editarr);
// //   if (!display.trim().length <= 0) {
// //     editarr.splice(key, 1, display);
// //     setTodoList(editarr);
// //   }
// // }

// // note edit item handler item;

// const edititems = (key, value) => {
//   // console.log("key value" , key , "value item" , value);
//   setEditIs(true);
//   setTargetkey(key);
//   setInputVal(value);
// }

// // note update item handler item;

// const updateitemhandler = () => {
//   // console.log("update item :" , inputVal);
//   const restdata = [...todoList];
//   restdata.splice(targetkey, 1, inputVal)
//   setTodoList(restdata);
//   setInputVal("");
//   setEditIs(false)
//   setTargetkey("")

// }

// // note cancel item handler item;

// const cancelitemhandler = () => {
//   setEditIs(false)
//   setTargetkey("")
//   setInputVal("")
// }






//   return (
//     <>
//       <div className="main-container">
//         <div className="div-1">
//           <h1 className="Heading1">Todo List Render In Next js</h1>

//           <input
//             type="text"
//             placeholder="Write Something"
//             value={inputVal}
//             onChange={(e) => {
//               setInputVal(e.target.value);
//             }}
//             autoFocus
//             className="input-val"
//           />
//           {
//             (editIs)
//               ?
//               (
//                 <>
//                   <button
//                     onClick={updateitemhandler}
//                     disabled={inputVal.trim().length < 1}
//                   >
//                     update item
//                   </button>

//                   <button onClick={cancelitemhandler}>
//                     Cancel item
//                   </button>
//                 </>
//               )
//               :
//               (
//                 <button
//                   onClick={inputHandler}
//                   disabled={inputVal.trim().length < 1}
//                   className="btn1"
//                   autoFocus
//                 >
//                   Submit
//                 </button>
//               )
//           }

//           <ul className="ul-1">
//             {

//               (todoList.length > 0)
//                 ?
//                 (todoList.map((item, index) => <li className="list" key={index}>{item}
//                   <button
//                     className="delbtn"
//                     onClick={() => removeItem(index)}
//                     disabled={editIs ? true : false}
//                   >
//                     Delete
//                   </button>
//                   <button onClick={() => { edititems(index, item) }}>
//                     Edititem
//                   </button>
//                 </li>))
//                 :
//                 <li className="dflt-li">Data Not Found </li>


//             }
//           </ul>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App;

// todo list completed;

// first example from use states;

// "use client"
// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return(
//     <>
//       <h1>this is a counter {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Counter</button>
//     </>
//   )

// }

// export default App;

// Second example from use states;


// "use client"
// import React, { useState } from "react";

// const App = () => {

//     const [text, setText] = useState("Azam");

//   return(
//     <>
//     <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
//     <h1>Your Name is {text}</h1>
//     <button onClick={()=> setText("Azam")}>Reset</button>
//     </>
//   )
// }

// export default App;

// third example from use states;

// "use client"
// import React, { useState } from "react";

// const App = () => {

//     const [liked, setLiked] = useState(true);

//   return(
//     <>
//     <input 
//     type="checkbox"
//     checked={liked}
//     onChange={(e) => setLiked(e.target.checked)}
//     />
//     Like This
//     <h1>You {liked ? 'Liked' : 'Do Not Liked' }This</h1>
//     </>
//   )
// }

// export default App;

// Forth example from use states;


// "use client"
// import React, { useState } from "react";

// const App = () => {

//     const [liked, setLiked] = useState(true);

//   return(
//     <>
//     <input 
//     type="checkbox"
//     checked={liked}
//     onChange={(e) => setLiked(e.target.checked)}
//     />
//     Like This
//     <h1>You {liked ? 'Liked' : 'Do Not Liked' }This</h1>
//     </>
//   )
// }

// export default App;


// "use client"

// import React from "react"
// import { useRouter } from "next/navigation"
// import Heading from "@/component/heading-component/heading"

// const App = () => {

//   const router = useRouter();

//   const goToAbout = () => {
//     router.push("/Services");
//   }
//   return (
//     <>
//       <h1>Wellcome to NextJs! </h1>
//       < Heading screenName = "Home"/>
//       <button onClick={goToAbout}>Go To Services</button>
//       <button onClick={()=> router.push("/about")}>Go To About</button>
//       <button onClick={()=> router.push("/contact")}>Go To Contact</button>
//       <button onClick={()=> router.push("/Feedback")}>Go To Feedback</button>
//       <button onClick={()=> router.push("/other")}>Go To Others</button>

//     </>
//   )
// }

// export default App;



// "use client"
// import wheatherData from '@/component/components/wheatherdata';
// import React, { useEffect, useState } from 'react'

// const WeatherApp = () => {

//     const [location, setLocation] = useState("");
//     const [dataList, setDataList] = useState([]);
//     const [isCheck, setIsCheck] = useState(false);


//     const weatherApi = () => {



//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=86e6d80268a6cad371a61545fd9c4944`)
//             .then((response) => response.json())

//             .then((actualData) => {
//                 setDataList([actualData]);
//                 console.log(actualData);
//             })
//             .catch((err) => {
//                 console.log("something went wrong", err)
//             })


//     }

//     useEffect(() => {
//         if (isCheck == true) {
//             weatherApi()
//             setIsCheck(false);
//             setLocation("")
//         }
//     }, [isCheck])


//     return (

//         <>

//             <section className="main-1">
//                 <div className='container'>
//                     <div className='input-1'>
//                         <input className='input'
//                             type='text'
//                             placeholder='Country & City Name'
//                             onChange={(e) => setLocation(e.target.value)}
//                             value={location}
//                         />
//                     </div>
//                     <button
//                         className='btn-1'
//                         onClick={() => setIsCheck(true)}
//                     >
//                         Search
//                     </button>
//                 </div>
//             <wheatherData dataList={dataList}/>
//             </section>
//         </>
//     )
// }

// export default WeatherApp;

"use client"
import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4">Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
  );
}

export default App;