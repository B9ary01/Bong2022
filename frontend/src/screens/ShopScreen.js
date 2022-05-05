import React, { useState } from "react";

import Data from "../components/data2"

import Card from "../components/Card.js";
import Buttons from "../components/Buttons.js";
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


    return (
     

      <div>
       
              


<div className="">
  <div className="">
    <h1 className="col-12"> Filter</h1>
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