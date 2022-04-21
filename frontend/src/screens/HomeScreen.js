import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import LoadingPage from '../components/LoadingPage';
import MessagePage from '../components/MessagePage';
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/ProductActions";
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
      </div>

    );
  }