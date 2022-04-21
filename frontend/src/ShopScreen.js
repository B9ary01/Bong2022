import React, { useState } from "react";

import Data from "./data"

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

const Card = ({ item }) => {
  return (
    <>
      <div className="">
        <div className="">
          {item.map((Val) => {
            return (
              <div
                className="medium"
                key={Val._id}
              >
                <div className="">
                  <img src={Val.image} alt={Val.name} className="" />
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
    <Card item={item} />
  </div>
</div>


   


 
   
      </div>





    );
  }