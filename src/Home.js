import Header from './Header';
import Footer from './Footer';
import React from 'react';
export default function Home(){
    return(
       <>
        <div>
        <Header/>
        <div class="header_section">
        <div class="banner_section layout_padding">
      <div class="container">
        <div id="main_slider" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-6">
                  <h1 class="your_text">Your Favorite</h1>
                  <h1 class="Shows_text">Shows And Movies</h1>
                  <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                  <div class="start_bt"><a href="#">Start Now</a></div>
                  <div class="read_bt"><a href="#">Read More</a></div>
                </div>
                <div class="col-md-6">
                  <div class="images_1"><img src="images/img-1.png"/></div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-6">
                  <h1 class="your_text">Your Favorite</h1>
                  <h1 class="Shows_text">Shows And Movies</h1>
                  <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                  <div class="start_bt"><a href="#">Start Now</a></div>
                  <div class="read_bt"><a href="#">Read More</a></div>
                </div>
                <div class="col-md-6">
                  <div class="images_1"><img src="images/img-1.png"/></div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-6">
                  <h1 class="your_text">Your Favorite</h1>
                  <h1 class="Shows_text">Shows And Movies</h1>
                  <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                  <div class="start_bt"><a href="/recharge">Start Now</a></div>
                  <div class="read_bt"><a href="#">Read More</a></div>
                </div>
                <div class="col-md-6">
                  <div class="images_1"><img src="images/img-1.png"/></div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i class="fa-arrow-left"><img src="images/left-arrow.png"/></i>
          </a>
          <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i class="fa-angle-right"><img src="images/right-arrow.png"/></i>
          </a>
        </div>
          <div class="banner_section_2">
            <div class="row">
              <div class="col-lg-4 col-sm-12">
                <div class="box_main">
                  <div class="internet_icon"></div>
                  <h4 class="broadband_text">Broadband</h4>
                  <p class="many_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, m Ipsum, you need to be</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12">
                <div class="box_main active">
                  <div class="internet_icon1"></div>
                  <h4 class="broadband_text active">Broadband</h4>
                  <p class="many_text active">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, m Ipsum, you need to be</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12">
                <div class="box_main">
                  <div class="internet_icon2"></div>
                  <h4 class="broadband_text">Broadband</h4>
                  <p class="many_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, m Ipsum, you need to be</p>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
    </div>
        <div class="about_section layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="image_2"><img src="images/img-2.png"/></div>
          </div>
          <div class="col-md-6">
            <h1 class="live_text">Live Sport and TV-shows for best
            friends
            </h1>
            <p class="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
            <div class="online_bt_main">
              <div class="online_bt"><a href="#">4K Ultra HD Quality</a></div>
              <div class="online_bt1"><a href="#">200+ Online Channels</a></div>
              <div class="read_bt1"><a href="#">Read More</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Blog Session */}
    <div class="client_section layout_padding">
      <div class="container">
        <h1 class="client_taital">What our clients say</h1>
        <div class="client_section2 layout_padding">
          <div class="row">
            <div class="col-sm-4">
              <div class="client_image"><img src="images/img-3.png"/></div>
            </div>
            <div class="col-sm-8">
              <div class="miller_text">Miller<span class="quote_icon"><img src="images/quote-icon.png"/></span></div>
              <p class="ipsum_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id e</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
    {/* Contact Session */}
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
    {/* Product Session */}
    <div class="product_section layout_padding margin_top0">
      <div class="container">
        <h2 class="tariffs_text">Tariffs</h2>
        <h1 class="choose_text">Choose your plan</h1>
        <p class="lorem_text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in elementum urna est ut ligula.</p>
        <div class="product_section2">
          <div class="row">
            <div class="col-lg-4 col-sm-12">
              <h2 class="easy_text">Easy Surfing</h2>
              <h1 class="internet_text">Internet</h1>
              <div class="month_main clearfix">
                <h1 class="dolor_text">$24.99</h1>
                <h2 class="month_text">Month</h2>
                <p class="long_text">It is a long established f
                act distracteontent </p>
              </div>
              <div class="seemore_main">
                <div class="see_more"><a href="#">SEE MORE</a></div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <h2 class="easy_text">Impression</h2>
              <h1 class="internet_text">Tv</h1>
              <div class="month_main clearfix">
                <h1 class="dolor_text">$24.99</h1>
                <h2 class="month_text">Month</h2>
                <p class="long_text">It is a long established f
                act distracteontent </p>
              </div>
              <div class="seemore_main">
                <div class="see_more"><a href="#">SEE MORE</a></div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <h2 class="easy_text">Premium Plan</h2>
              <h1 class="internet_text">Internet + TV + Phone</h1>
              <div class="month_main clearfix">
                <h1 class="dolor_text">$24.99</h1>
                <h2 class="month_text">Month</h2>
                <p class="long_text">It is a long established f
                act distracteontent </p>
              </div>
              <div class="seemore_main">
                <div class="see_more"><a href="#">SEE MORE</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* 
        <Login/>
        <Register/> */}
        <Footer/>
        </div>
        </>
    
    );     
}