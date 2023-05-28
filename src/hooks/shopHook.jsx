import { useSelector } from "react-redux";
import { selectShops, selectIsLoading, selectProducts } from "../redux/shop/shop-selections";

export const useShop = () =>{
    return{
        shops: useSelector(selectShops), 
        isLoading: useSelector(selectIsLoading),
        products: useSelector(selectProducts)


    }
}