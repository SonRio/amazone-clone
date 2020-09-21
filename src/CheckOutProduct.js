import React from "react";
import './css/checkout.css'
import { useStateValue } from "./StateProvider";

function CheckOutProduct({id,price,image,rating,title}) {

  const [ { basket }, dispatchEvent ] = useStateValue();

  const removeFromBasket = () => {
    dispatchEvent({
      type : 'REMOVE_FROM_BASKET',
      id : id
    })
  };

  return (
    <div className="checkOutProduct">
        <div className="product__image">
            <img src={ image} alt="product_image" />
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      <div className="product__infor">
        <p>{ title}</p>
        <p className="product__price">
          <strong>{ price}</strong>
          <small> $</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <i className="fa fa-star" style={{ color: "#fb0" }}></i>
            ))}
        </div>
      </div>
      
    </div>
  );
}

export default CheckOutProduct;
