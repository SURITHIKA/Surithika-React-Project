// import { useRef } from "react";
// import Footer from "./Footer";
// import Header from "./Header";
// import { useNavigate } from "react-router-dom";
// import React from "react";

// export default function Register(){
//     return(
//         <>
//         <div>

//         </div>
//         </>
//     );
// }

import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Register = () => {
  const Navigate=useNavigate();
  let name = useRef();
  let email = useRef();
  let address = useRef();
  let mobile = useRef();
  let aadhaar = useRef();
  let password = useRef();

  const getapi1=async () => {
    let nam1= name.current.value;
    //   let em1= email.current.value;
      let add1= address.current.value;
      let mob1= mobile.current.value;
      let aad1= aadhaar.current.value;
      let pas1= password .current.value;
      let data={"name":nam1,"address":add1,"mobile":mob1,"aadhaar":aad1,"password":pas1};
      let obj=JSON.stringify(data);
      let response = await fetch("http://localhost:8081/plans/register",
          {"headers":{"content-type":"application/json"},
            "method": "POST",
            body : obj
          })
       if(response.ok){
        let serverRes = await response.json();
           localStorage.setItem('getapi',serverRes['token']);
           Navigate('/home');
        }
        else{
            alert("Fill your details to signup");
        }
      }
return (
  <div>
  <Header/>
   

<div class="contact_section layout_padding">
      <div class="container">
        {/* <h1 class="check_text">Check ability to connect our services in your area</h1> */}
        <div class="contact_section2">
          {/* <div class="addres_main"> */}
            <div class="input_bg">
              <h3 class="fact_text"style={{color:"black"}}>Register</h3>
              <input type="text" class="address_text" placeholder="Enter your name" ref={name} name="text"></input>
              {/* <input type="text" class="address_text" placeholder="Enter your email" ref={email} name="text"></input> */}
              <input type="text" class="address_text" placeholder="Enter your address" ref={address} name="text"></input>
              <input type="text" class="address_text" placeholder="Enter your mobile" ref={mobile} name="text"></input>
              <input type="text" class="address_text" placeholder="Enter your aadhaar" ref={aadhaar} name="text"></input>
              <input type="text" class="address_text" placeholder="Enter your password" ref={password} name="text"></input>
              <button type="button" class="get_bt" onClick={()=>getapi1()}>GET STARTED</button>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
 {/* <Footer/> */}
  </div>
);
}


export default Register;