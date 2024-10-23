import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useForm } from "@inertiajs/react";

const CheckoutForm = ({ order }: { order: any }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        amount: order.price || 0,
        name: "",
        email: order.user.email || "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        post(route("payment.try", order.id), {
            onSuccess: async (response) => {
                const { clientSecret } = response;
                const { error, paymentIntent } =
                    await stripe.confirmCardPayment(clientSecret, {
                        payment_method: {
                            card: cardElement!,
                        },
                    });

                if (error) {
                    setErrorMessage(
                        error.message || "Error processing payment"
                    );
                    setLoading(false);
                } else if (paymentIntent?.status === "succeeded") {
                    alert("Payment successful!");
                    setLoading(false);
                }
            },
            onError: () => {
                setErrorMessage("Payment intent creation failed.");
                setLoading(false);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                    className={`shadow appearance-none border rounded w-full py-2 px-3 ${
                        errors.name ? "border-red-500" : ""
                    }`}
                />
                {errors.name && (
                    <div className="text-red-500 text-xs mt-1">
                        {errors.name}
                    </div>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                    className={`shadow appearance-none border rounded w-full py-2 px-3 ${
                        errors.email ? "border-red-500" : ""
                    }`}
                />
                {errors.email && (
                    <div className="text-red-500 text-xs mt-1">
                        {errors.email}
                    </div>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Amount
                </label>
                <input
                    type="number"
                    value={data.amount}
                    onChange={(e) => setData("amount", e.target.value)}
                    required
                    className={`shadow appearance-none border rounded w-full py-2 px-3 ${
                        errors.amount ? "border-red-500" : ""
                    }`}
                />
                {errors.amount && (
                    <div className="text-red-500 text-xs mt-1">
                        {errors.amount}
                    </div>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Card details
                </label>
                <CardElement className="border rounded py-2 px-3" />
                {errorMessage && (
                    <div className="text-red-500 text-xs mt-1">
                        {errorMessage}
                    </div>
                )}
            </div>
            <button
                type="submit"
                disabled={loading || processing}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                {loading ? "Processing..." : "Pay"}
            </button>
        </form>
    );
};

export default CheckoutForm;
