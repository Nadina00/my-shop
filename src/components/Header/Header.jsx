import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  return (
    <div className={css.box}>
      <div className={css.btnBox}>
        <Link to={backLinkHref} className={css.linkNav}>Back</Link>
        <Link className={css.linkNav} to={"/shopping"}> Go</Link>
        <Link to={"/"} className={css.linkNav}> Home</Link>
        <form>
          <label>
            <input className={css.input}></input>
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
