import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./Header.module.css";
import { useShop } from "../../hooks/shopHook";
import { useDispatch } from "react-redux";
import shopOperations from "../../redux/shop/shop-operations";

export const Header = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const { shops } = useShop();
  const dispatch = useDispatch()
  console.log(shops);

  const handleChange = (e) => {
    e.preventDefault();
    const findShops = e.target.value;
    console.log(findShops)
    const filterShops = shops.filter(shop => shop.name.toLowerCase().indexOf(findShops.toLowerCase()) !== -1);
    dispatch(shopOperations.getFilterShop(filterShops))
    
  };

  return (
    <div className={css.box}>
      <div className={css.btnBox}>
        <Link to={backLinkHref} className={css.linkNav}>
          Back
        </Link>
        <Link className={css.linkNav} to={"/shopping"}>
          {" "}
          Go
        </Link>
        <Link to={"/"} className={css.linkNav}>
          {" "}
          Home
        </Link>
        <form>
          <label>
            <input className={css.input} onChange={handleChange}></input>
          </label>
        </form>
      </div>
      <div className={css.boxLink}>
        <Link to={"/"} className={css.link}>
          {" "}
          Shop
        </Link>
        <Link to={"/shopping"} className={css.link}>
          {" "}
          Shoppig Cart
        </Link>
      </div>
    </div>
  );
};
