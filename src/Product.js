import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";

export default function Product(){
    const[getPlan,setGetplan]=useState([]);
    useEffect(async()=>{
        let response=await fetch("http://localhost:8081/plans/api/getplans",{"method":"GET","headers":{"token":localStorage.getItem('token')}});
       console.log(response);
        let server=await response.json();
        console.log(server);
        setGetplan(server);
    },[])
    return(
        <>
      <div>
        <Header/>
        <div class="product_section layout_padding margin_top0">
      <div class="container">
        {/* <h2 class="tariffs_text">Tariffs</h2> */}
        <h1 class="choose_text">Choose your plan</h1>
          <div class="product_section2">
          <div class="row">
            {
                getPlan.map((element)=>{
                    return(
            <div class="col-lg-4 col-sm-12">
              <h2 class="easy_text">{element.name}</h2>
              <h1 class="internet_text">Internet</h1>
              <div class="month_main clearfix">
                <h1 class="dolor_text">{element.price}</h1>
                <h2 class="month_text">{element.validity_date}</h2>
                <p class="long_text">It is a long established f
                act distracteontent </p>
              </div>
              <div class="seemore_main">
                <div class="see_more"><a href="/recharge">Recharge</a></div>
              </div>
            </div>
                )
            })
            }
          
          </div>
        </div>
      </div>
    </div>
        <Footer/>
      </div>
        </>
    );
}