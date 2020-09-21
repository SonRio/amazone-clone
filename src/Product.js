import React from "react";
import "./css/product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, image, price, rating, title }) {

  const [ { basket }, dispatchEvent ] = useStateValue();

  const addToBasket = () => {
    dispatchEvent ({
      type: 'ADD_TO_BASKET',
      item : {
        id : id,
        title : title,
        image :image,
        price : price ,
        rating : rating
      }
    })
  };

  return (
    <div className="product">
      <div className="product__infor">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
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

      <div className="product__image">
        <img src={image} alt="product_image" />
        <button onClick={addToBasket}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
