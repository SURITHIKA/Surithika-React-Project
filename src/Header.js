import React,{Component} from "react";
export default function Header(){
    return(
        
        <div>
        <div class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="logo"><a href="/home"><img src="images/logo.png"/></a></div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/product">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
              </li>
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">              
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">GET STARTED</button>
            </form> */}
            <div class="search_icon">
              <ul>
                <li><a href="#"><img src="images/user-icon.png"/></a></li>
                <li><a href="#"><img src="images/bag-icon.png"/></a></li>
                <li><a href="#"><img src="images/search-icon.png"/></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
   
    </div>
    
    </div> 
       
    );
    }