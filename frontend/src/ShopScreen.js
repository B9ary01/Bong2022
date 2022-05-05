import React, { useEffect, useState } from "react";
import LoadingPage from "./components/LoadingPage";
import MessagePage from "./components/MessagePage";

import Data from "./data"
import './shopScreen.css'

import { useDispatch, useSelector } from "react-redux";
import Product from "./components/Product";

import { listProducts } from "./actions/ProductActions";


export default function ShopScreen() {
  
///
///

const [item, setItem] = useState(Data);

const menuItems = [...new Set(Data.map((Val) => Val.category))];

const filterItem = (curcat) => {
  const newItem = Data.filter((newVal) => {
    return newVal.category === curcat;
  });
  setItem(newItem);
};
/////
///

const dispatch= useDispatch();
const productList = useSelector( (state)=> state.productList);
const {loading,error, products}= productList;

useEffect(()=>{
 dispatch(listProducts());
}, [dispatch]);
///

const Card = ({ item }) => {
  return (
    <>
      <div className="">
        <div className="row top">
          {item.map((Val) => {
            return (
              <div
                className="card"
                key={Val._id}
              >
                <div className="">
                  <img className="medium" src={Val.image} alt={Val.name} />
                  </div>
                <div className="">
                  <div className="">
                    {Val.name} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.price}
                  </div>
                  <div className="">{Val.description}</div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};


//
const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="">
        {menuItems.map((Val, _id) => {
          return (
            <button
              className=""
              onClick={() => filterItem(Val)}
              key={_id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className=""
          onClick={() => setItem(Data)}
        >
          All
        </button>

        
      </div>
    </>
  );
};

    return (
     

      <div>
       
              


<div className="">
  <div className="">
    <h1 className=""> Filter</h1>
    <Buttons
      filterItem={filterItem}
      setItem={setItem}
      menuItems={menuItems}
    />
    {/*<Card item={item} />*/}

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
  </div>
</div>


   


 
   
      </div>





    );
  }