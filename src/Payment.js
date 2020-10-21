import { useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { totalCost } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, seterror] = useState(null);
  const [disabled, setdisabled] = useState(true);
  const [succeeded, setsucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  const [processing, setprocessing] = useState("");
  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios({
        method: "post",
        url: `payments/create?total=${totalCost(basket) * 100}`,
      });
      setClientSecret(res.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("THE SECCRET KEY ", clientSecret);
  const handlesubmit = async (e) => {
    e.preventDefault();
    setprocessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setsucceeded(true);
        seterror(null);
        setprocessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };

  const handlechange = (e) => {
    setdisabled(e.empty);
    seterror(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <h1>
        Checkout (<Link to="/checkout">{basket?.length} Items</Link>)
      </h1>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React city</p>
            <p>Gujrat, India</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3> Review item and deliver</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                img={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handlesubmit}>
              <CardElement onChange={handlechange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={totalCost(basket)} // Part of the homework
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
