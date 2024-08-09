import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyPlan(){
    const[myplan,setMyPlan]=useState([]);
    let mobile=useRef();
    
const getmyplan=async()=>{
    let mb=mobile.current.value;
    let data={"mobile":mb};
    let obj=JSON.stringify(data);

        let response=await fetch("http://localhost:8081/plans/api/myplans",
            {"headers":{"token":localStorage.getItem('token'),"content-type":"application/json"}
            ,"method":"POST",body:obj});
            let serverRes=await response.json();
            console.log(serverRes);
            setMyPlan(serverRes);
        }
 
    return(
        <>
      <div>
        <Header/>
        <input type="text" class="address_text" ref={mobile} placeholder="Enter your address" name="text"></input>
        <button type="button" class="get_bt" onClick={()=>getmyplan()}>GET MY PLAN</button>
        
    <div class="client_section layout_padding">
      <div class="container">
        <h1 class="client_taital">My Plan details</h1>
        <div class="client_section2 layout_padding">
    {
                myplan.map((element)=>{
                    return(
            <div class="col-lg-4 col-sm-12">
              <h2 class="easy_text">{element.id}</h2>
              <h1 class="internet_text">{element.plan_name}</h1>
              <div class="month_main clearfix">
                <h1 class="dolor_text" style={{fontSize:"5"}}>success_date:{element.success_date}</h1>
                <h2 class="month_text">validity_date:{element.validity_date}</h2>
                <p class="long_text">mobile_number:{element.mobile}</p>
              </div>
              <div class="seemore_main">
                <div class="see_more"><a href="/recharge">Recharge Again</a></div>
              </div>
            </div>
                )
            })
            }
            </div></div></div>
        <Footer/>
      </div>
        </>
    )
}