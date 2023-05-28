import { useDispatch } from "react-redux";
import css from "./ProductList.module.css";
import productOperations from "../../redux/product/product-operations";
import { useProduct } from "../../hooks/productHook";

export const Product = ({ product, onClick}) => {
  const dispatch = useDispatch()
  const {products} = useProduct
  


  const handleClick = (e) =>{
    if(products){
      for (const item of products) {
        console.log(item)
        if(item.id !== product.id){
          dispatch(productOperations.addProduct(product))
        } else{
          return alert ("the product is already there")
        }
      } 
      } else{
        dispatch(productOperations.addProduct(product))
      }
    }
  
   
  return (
    <div className={css.itemBox}>
      <h2 className={css.title}> {product.name}</h2>
      <img src={product.image} alt="foto" width={150} />
      <p>{product.price} uah</p>
      <button type="button" className={css.btn} onClick={handleClick}>
        {" "}
        add product{" "}
      </button>
         </div>
  );
};
