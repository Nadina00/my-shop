import React, { useEffect } from "react";
import { Header } from "../Header/Header";
import { Shop } from "./Shop";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./SideBar.module.css";
//import shops from "../../shops.json";
import { useDispatch } from "react-redux";
import shopOperations from "../../redux/shop/shop-operations";
import { useShop } from "../../hooks/shopHook";

export const SideBar = () => {
  const dispatch = useDispatch();
  const { shops, isLoading, filter } = useShop();

  useEffect(() => {
    dispatch(shopOperations.getShop());
  }, [dispatch]);

  console.log(filter, isLoading);

  return (
    <div>
      <Header />
      <div className={css.box}>
        <div className={css.shopBox}>
          <h2>Shops :</h2>
          {filter.length ? (
            <ul className={css.list}>
              {isLoading ? (
                <p>...Loading</p>
              ) : filter.length ? (
                filter.map((shop) => (
                  <li key={shop._id}>
                    <Link to={`${shop._id}`}>
                      <Shop shop={shop} />
                    </Link>
                  </li>
                ))
              ) : (
                <p>No Shops found </p>
              )}
            </ul>
          ) : (
            <ul className={css.list}>
              {isLoading ? (
                <p>...Loading</p>
              ) : shops.length ? (
                shops.map((shop) => (
                  <li key={shop._id}>
                    <Link to={`${shop._id}`}>
                      <Shop shop={shop} />
                    </Link>
                  </li>
                ))
              ) : (
                <p>No Shops found </p>
              )}
            </ul>
          )}
        </div>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
