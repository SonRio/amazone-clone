import React from "react";
import CurrencyFormat from "react-currency-format";
import "./css/subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">

      <CurrencyFormat
        renderText={(value) => (
          <div className="subtotal__title">
            <h2>Subtotal</h2>
            <p>
              Subtotal ({basket?.length} items) :
              <strong> {value}</strong>
            </p>
            <div className="subtotal__gift">
                <input type='checkbox'/>
                <label>This order contain a gift</label>
            </div>
            <button>Processd to Checkout</button>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}
export default Subtotal;
