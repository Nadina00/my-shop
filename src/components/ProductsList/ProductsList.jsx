
import { Product } from "./Product";
import css from "./ProductList.module.css";
import { useShop } from "../../hooks/shopHook";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import shopOperations from "../../redux/shop/shop-operations";


//import product from "../../products.json";

export const ProductsList = () => {

  const { products, isLoading } = useShop();
  const dispatch = useDispatch()
  const location = useLocation();


  useEffect(() =>{
    dispatch(shopOperations.getShopProducts(location.pathname))
  }, [dispatch, location.pathname])

    
  let productList;


  const onClick = (product) => {
    productList.push(product);
    console.log(productList);
    localStorage.setItem("product", JSON.stringify(productList));
  };

  return (
    <div className={css.box}>
      <ul className={css.list}>
      {isLoading ? (<p>...Loading</p>) : 
            (products.length ? (
              products.map((product) => (
                <li key={product._id}>
                  <Product product={product} onClick={onClick} />
                </li>
              ))
            ) : (
              <p>No Shops found </p>
            )
            )
        }
       
      </ul>
    </div>
  );
};
