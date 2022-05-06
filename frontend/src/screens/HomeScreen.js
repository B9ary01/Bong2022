import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import LoadingPage from '../components/LoadingPage';
import MessagePage from '../components/MessagePage';
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/ProductActions";
import img1 from '../img/shoe3.jpeg';

import cam6 from '../img/cam6.jpeg';
import v2 from '../img/watch1.jpeg';



export default function HomeScreen() {
  
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"fc697ef5db66041a66c96c2980a8e16a","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */



  const dispatch= useDispatch();
  const productList = useSelector( (state)=> state.productList);
  const {loading,error, products}= productList;

  useEffect(()=>{
   dispatch(listProducts());
  }, [dispatch]);

  
    return (
     

     <div>
        {/*
         {loading ? (
        <LoadingPage></LoadingPage>
      ) : error ? (
        <MessagePage variant="danger">{error}</MessagePage>
      ) : (
       
       <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
              
    
        </div>
 
      )}
          
          */}
        
          <section class="pt-2 pb-4">

  <div class="container">
    <div class="jumbotron jumbotron-fluid">
      <div class="col-md-12 text-center">
        <h1 className="welcome">Welcom to Bong Ecommerce. 
        </h1>
        
</div>
</div>
</div>
</section>
          <h1>Our Latest Products</h1>
          <section class="pt-2 pb-4">
          <div class="jumbotron jumbotron-fluid">
      <div class="col-md-12 text-center">
<div className="row">
      <div class=" col-md-4 text-center">
        <img className="small" class="img-fluid qualities-img p-3" src={img1} alt="trainer image"/>
        <h2>Trainer</h2>
    </div>

      <div class="col-md-4 text-center">
      <img className="small" class="img-fluid qualities-img p-3" src={cam6} alt="camera image"/>
      <h2>Camera</h2>
  </div>
  <div class="col-md-4 text-center">
    <img className="small" class="img-fluid qualities-img p-3" src={v2} alt="watch image"/>
    <h2>Watch</h2>
 </div>
 </div>
</div>
</div>
</section>
          {loading ? (
        <LoadingPage></LoadingPage>
      ) : error ? (
        <MessagePage variant="danger">{error}</MessagePage>
      ) : (
       
       <div className="row center">
          {/*{products.map((product) => (
            
            <Product key={product._id} product={product}></Product>
          ))}*/}
              
    
        </div>
 
      )}
                <section>
                <div class="container">
    <div class="jumbotron jumbotron-fluid">
                  <h1>About Bong Ecommerce</h1>
                <p>Founded in October 2021 based in Namche, Solu, Bong is an eCommerce platform. We try best to offer quality products to all customers.</p>
            
            </div>
            </div>
            </section>
            

           

      </div>

    );
  }