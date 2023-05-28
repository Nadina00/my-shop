import React, { useState } from "react";
import css from "./CardList.module.css";
import { useDispatch } from "react-redux";
import productOperations from "../../redux/product/product-operations";

export const Card = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const onChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

   let total = product.price * quantity;
  if(product.quantity !== quantity){
    dispatch(productOperations.updateQuantityProduct({id: product.id, quantity}))
  }

  const onClick = () =>{
    dispatch(productOperations.deleteProduct(product._id));
  }

  return (
    <div className={css.itemBox}>
      <img src={product.image} width={300} alt="foto" />
      <h2 className={css.title}>{product.name}</h2>
      <form>
        <label>
          quantity
          <input onChange={onChange} className={css.input} type="number"></input>
        </label>
      </form>  
      <p>total: {!total ? 0 : `${total}`} uah</p>
      <button type="button" className={css.btn} onClick={onClick}>
        {" "}
        del product{" "}
      </button>
    </div>
  );
};
