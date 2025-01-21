
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../Components/SectionTitle";

// Stripe public key
const stripePromise = loadStripe(import.meta.env.VITE_stripe);

const Payment = () => {
    

    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat" />
            
                <Elements stripe={stripePromise} >
                    <CheckoutForm />
                </Elements>
            
        </div>
    );
};

export default Payment;
