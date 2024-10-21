import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { props } = usePage(); // Inertia.js props

    // useForm-ით ფორმის მდგომარეობის და მონაცემების ინიციალიზაცია
    const { data, setData, post, processing, errors } = useForm({
        name: "", // სახელი
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Stripe API-ში გადახდის ინტერენტის შექმნა
        const { clientSecret } = await fetch("/api/create-payment-intent").then(
            (res) => res.json()
        );

        // Stripe-ის ბარათის გადახდის პროცესის შესრულება
        const { error, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: data.name, // სახელი Inertia.js useForm-იდან
                    },
                },
            }
        );

        if (error) {
            setErrorMessage(error.message);
        } else if (paymentIntent?.status === "succeeded") {
            // გადახდა წარმატებით დასრულდა
            post("/payment/success", {
                paymentIntentId: paymentIntent.id, // PaymentIntent ID
                name: data.name, // სახელი
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)} // ფორმის მონაცემების განახლება
                placeholder="Your Name"
            />
            {errors.name && <div>{errors.name}</div>}{" "}
            {/* ვალიდაციის შეცდომების ჩვენება */}
            <CardElement />
            <button type="submit" disabled={processing || !stripe}>
                გადაიხადე
            </button>
            {errorMessage && <div>{errorMessage}</div>}{" "}
            {/* Stripe-ის შეცდომების ჩვენება */}
        </form>
    );
};

export default CheckoutForm;
