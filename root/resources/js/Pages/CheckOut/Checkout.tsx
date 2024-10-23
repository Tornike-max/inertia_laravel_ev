import { useEffect, useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CheckoutForm from "@/Components/CheckoutForm";
import { Order } from "@/types";

const stripePromise = loadStripe(
    "pk_test_51OlqzLAsljxtDLDChC8F1KvaW2GTUGa8upKSAlXw00lYgUWmNmsYfpVDY3nNYcOhKcYhkbkPwaQQfN41GpRnU43900scGN4DYi"
);

const Checkout = ({ order }: { order: Order }) => {
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    useEffect(() => {
        fetch(route("payment.try", order.id), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: order.price,
                email: order?.user?.email,
            }),
        })
            .then((response) => response.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [order]);

    const options = {
        clientSecret,
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold leading-tight text-gray-900">
                    გადახდა
                </h2>
            }
        >
            <Head title="გადახდა" />
            {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm order={order} />
                </Elements>
            )}
        </AuthenticatedLayout>
    );
};

export default Checkout;
