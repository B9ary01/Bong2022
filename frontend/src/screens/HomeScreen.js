import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingPage from '../components/LoadingPage';
import MessagePage from '../components/MessagePage';
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/ProductActions";

export default function HomeScreen() {
  const dispatch= useDispatch();
  const productList = useSelector( (state)=> state.productList);
  const {loading,error, products}= productList;

  useEffect(()=>{
   dispatch(listProducts());
  }, [dispatch]);

    return (
      <div>
         {loading ? (
        <LoadingPage></LoadingPage>
      ) : error ? (
        <MessagePage variant="danger">{error}</MessagePage>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
      </div>
    );
  }