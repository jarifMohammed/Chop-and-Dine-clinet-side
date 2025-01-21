import {  useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;
      const card = elements.getElement(CardElement)
      if(card == null){
        return
      }
      const {error ,paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
      })
      if(error){
        console.log('payment error ' , error);

      }
      else{
        console.log('paymeny method', paymentMethod);
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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Complete Payment</h2>
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
        disabled={!stripe || !elements}
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
