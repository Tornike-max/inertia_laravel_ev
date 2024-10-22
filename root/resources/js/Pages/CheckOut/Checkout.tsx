import { useEffect, useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import CheckoutForm from "@/Components/CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51QCkZyAhKAVI5G3XUBlMTIMUSifoqpvCJU2xPshw3Wc8W4knPPMKrmzrIzq7WD3xnTAObHuBuPyHaiabiBrLgsfH005iDY1Qex"
);

const Checkout = ({ auth, order }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold leading-tight text-gray-900">
                    გადაიხადეთ თანხა
                </h2>
            }
        >
            <Head title="გადაიხადეთ თანხა" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl w-full sm:px-6 lg:px-8">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            user={auth.user}
                            stripe={stripePromise}
                            order={order}
                        />
                    </Elements>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Checkout;
