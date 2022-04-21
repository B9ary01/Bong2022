import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="">
        <div className="">
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val._id}
              >
                <div className="">
                  <img src={Val.image} alt={Val.name} className="photo w-75" />
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
export default Card;

