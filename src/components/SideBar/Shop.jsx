import React  from "react";


export const Shop = ({shop}) => {

  return (
    <div>
      <img src={shop.avatar} alt="foto" width={250}/>
      <h2>{shop.name}</h2>
    </div>
  );
};
