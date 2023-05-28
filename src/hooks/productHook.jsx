import { useSelector } from "react-redux";
import { selectProducts } from "../redux/product/product-selections";

export const useProduct = () =>{
    return{
        products: useSelector(selectProducts),     

    }
}