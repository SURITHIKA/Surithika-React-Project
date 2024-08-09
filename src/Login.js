import { useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import React from "react";
export default function login(){
    const navigate = useNavigate();
    let mobile1=useRef();
    let password1=useRef();
    const logapi=async()=>{
        let mob1=mobile1.current.value;
        let pass=password1.current.value;
        let data={"mobile":mob1,"password":pass};
        let obj=JSON.stringify(data);
        let response=await fetch("http://localhost:8081/plans/login",
            {"headers":{"content-type":"application/json"},
            "method":"POST","body":obj})
            if(response.ok){
                let serverRes=await response.json();
                let d=JSON.stringify(serverRes);
                localStorage.setItem("token",serverRes.token);
                navigate('/home');
            }
    };
    return(
        <div>
      <Header/>
            <div class="contact_section layout_padding">
      <div class="container">
        <h1 class="check_text">Login</h1>
        <div class="contact_section2">
          <div class="addres_main">
            <div class="input_bg">
              {/* <h3 class="fact_text">Login</h3> */}
              <input type="text" class="address_text" ref={mobile1} placeholder="Enter your mobile" name="text"></input>
              <input type="text" class="address_text" ref={password1} placeholder="Enter your password" name="text"></input>
              <button type="button" class="get_bt" onClick={()=>logapi()}>GET STARTED</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>  
        </div>
    );
}