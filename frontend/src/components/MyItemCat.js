import React from "react";

function MyItemCat(myItem){
    return(
        <div>
{
    myItem.map((item)=>{
        return <div className="item-con" key={item._id}>
            <div className="">
                <img src={item.image} alt=""/>
                <h2>{item.name}</h2>
                <p>{item.description}</p>

                </div>

            </div>
    })
}
        </div>
    )
}

export default MyItemCat;