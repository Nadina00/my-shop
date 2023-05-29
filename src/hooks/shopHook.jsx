import { useSelector } from "react-redux";
import { selectShops, selectIsLoading, selectProducts, selectFilter } from "../redux/shop/shop-selections";

export const useShop = () =>{
    return{
        shops: useSelector(selectShops), 
        isLoading: useSelector(selectIsLoading),
        products: useSelector(selectProducts),
        filter: useSelector(selectFilter)

    }
}