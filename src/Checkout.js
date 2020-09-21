import React from "react";
import CheckOutProduct from "./CheckOutProduct";
import "./css/checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import checkout_ad from "./images/checkout_ad.jpg";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout_ad" src={checkout_ad} alt="ads" />
        <div className="checkout_subtotal">
          <Subtotal />
        </div>
      </div>
      <div className="checkout__right">
        {basket?.length === 0 ? (
          <div>
            <h2 style={{marginLeft:"20px"}} >Your basket is empty</h2>
            <p>
              You do not have any items in your basket. Please return and click
              button "Add to basket" to buy somethings. Thank you.
            </p>
          </div>
        ) : (
          <div>
            <h2 style={{marginLeft:"20px"}}>Your Shopping Basket</h2>
            {basket?.map((item, index) => (
              <CheckOutProduct
                index={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
