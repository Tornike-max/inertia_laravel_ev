import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.STRIPE_KEY);

const CheckoutForm = () => {
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // Stripe-ის სესიის შექმნა
        const { data } = await axios.post("/create-checkout-session", {
            customer_name: customerName,
            customer_email: customerEmail,
            amount: amount,
        });

        // Stripe-ის სესიის id
        const stripe = await stripePromise;
        stripe?.redirectToCheckout({ sessionId: data.id });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Pay</button>
        </form>
    );
};

export default CheckoutForm;
