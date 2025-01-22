import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const CheckoutForm = () => {
  const [paymentId, setpaymentId] = useState("");
  const { user } = useAuth();
  const [clientSecret, setclientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axios = useAxios();
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if(totalPrice > 0){
      axios.post("/create-payment-intent", { price: totalPrice }).then((res) => {
        console.log(res.data.clientSecret);
        setclientSecret(res.data.clientSecret);
      });
    }
  }, [axios, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error ", error);
    } else {
      console.log("paymeny method", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email,
            name: user.displayName,
          },
        },
      });
    if (confirmError) {
      console.log("error", confirmError);
    } else {
      console.log("paym,reny inrent", paymentIntent);
    
    if(paymentIntent.status === 'succeeded'){
      setpaymentId(paymentIntent.id)

       //save the payment in the database
      const payment = {
        email: user.email,
        transactionId:paymentIntent.id,
        price: totalPrice,
        date: new Date(),
        cartId: cart.map(item => item._id),
        menuItemId: cart.map(item => item.menuId),
        status: 'pending'
      }
     const res = await axios.post('/payments',payment)
     console.log(res.data);
     refetch()
    }
  }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Complete Payment
      </h2>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#32325d",
              fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#fa755a",
            },
          },
        }}
      />
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#5469d4",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          marginTop: "20px",
        }}
        disabled={!stripe || !clientSecret}
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
