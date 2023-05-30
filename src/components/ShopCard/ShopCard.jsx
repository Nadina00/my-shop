import { CustomerData } from "../CustomerData/CustomerData";
import { CardList } from "../ShoppingCards/CardList";
import { useProduct } from "../../hooks/productHook";
import css from "./ShopCard.module.css";
import { useDispatch } from "react-redux";
import orderOperations from "../../redux/order/order-operations";

export const ShopCard = () => {
  const { products } = useProduct();
  const dispatch = useDispatch();
  let total = 0;

  for (const product of products) {
    const t = product.price * product.quantity;
    total = total + t;
  }
  const user = JSON.parse(localStorage.getItem("user"));
  
   const onClick = (e) => {
    dispatch(orderOperations.addOrder({ products, user }));
    localStorage.clear();
  };

  return (
    <div>
      <div className={css.box}>
        <CustomerData />
        <div>
          <CardList />
          <div className={css.boxPrice}>
            <p className={css.title}> Total price: {total} uah </p>
            <button
              className={css.btn}
              onClick={onClick}
              disabled={
                !(products &&
                user)
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
