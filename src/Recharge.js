import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Recharge(){
    const Navigate=useNavigate();
    let mobile=useRef();
    let plan=useRef();
const getapi=async()=>{
    let mb=mobile.current.value;
    let pn=plan.current.value;
    let data={"mobile":mb,"name":pn};
    let obj=JSON.stringify(data);

        let response=await fetch("http://localhost:8081/plans/api/recharge",
            {"headers":{"token":localStorage.getItem('token'),"content-type":"application/json"}
            ,"method":"POST",body:obj});
        }
 
    return(
        <>
      <div>
        <Header/>
        <div class="contact_section layout_padding">
      <div class="container">
        <h1 class="check_text">Check ability to connect our services in your area</h1>
        <div class="contact_section2">
          <div class="addres_main">
            <div class="input_bg">
              <h3 class="fact_text">It is a long established fact that a reader will be distracted</h3>
              <input type="text" class="address_text" ref={mobile} placeholder="Enter your mobile number" name="text"></input>
              <input type="text" class="address_text" ref={plan} placeholder="Enter your plan name" name="text"></input>
              <button type="button" class="get_bt" onClick={()=>getapi()}> Do Recharge</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer/>
      </div>
        </>
    )
}