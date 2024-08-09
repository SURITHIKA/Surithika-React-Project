import Header from "./Header";
import Footer from "./Footer";
import React from "react";
export default function Contact(){
    return(
        <div>
        <Header/>
      <div class="contact_section layout_padding">
      <div class="container">
        <h1 class="check_text">Check ability to connect our services in your area</h1>
        <div class="contact_section2">
          <div class="addres_main">
            <div class="input_bg">
              <h3 class="fact_text">It is a long established fact that a reader will be distracted</h3>
              <input type="text" class="address_text" placeholder="Enter your address" name="text"></input>
              <button type="button" class="get_bt">GET STARTED</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
        </div>
    );
}