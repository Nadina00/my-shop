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
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const findShops = e.target.value;
    const filterShops = shops.filter(
      (shop) => shop.name.toLowerCase().indexOf(findShops.toLowerCase()) !== -1
    );
    dispatch(shopOperations.getFilterShop(filterShops));
  };

  const onChange = () => {
    localStorage.removeItem("user");
  };

  return (
    <div className={css.box}>
      <div className={css.btnBox}>
        <Link to={backLinkHref} className={css.linkNav} onClick={onChange}>
          Back
        </Link>
        <Link className={css.linkNav} to={"/shopping"}>
          {" "}
          Go
        </Link>
        <Link to={"/"} className={css.linkNav} onClick={onChange}>
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
        <Link to={"/"} className={css.link} onClick={onChange}>
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
