import React from "react";
import { Card } from "./Card";
import { useProduct } from "../../hooks/productHook";
import css from "./CardList.module.css"


export const CardList = () =>{

  const {products} = useProduct()
 
  console.log(products)

    return(
        <div className={css.box}>
        <ul className={css.list}>
          {products.map((product) => (
            <li key={product._id}>
              <Card product={product} />
            </li>
          ))}
        </ul>
      </div>
    )
}