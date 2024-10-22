import { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";
import { PageProps } from "@/types";

const CheckoutForm = ({ user, stripe, order }: PageProps) => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { data, setData, post, get, processing, errors } = useForm({
        amount: order.price || 0,
        name: "",
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage(null);

        post(route("payment.try", order.id), {
            onSuccess: (response) => {
                if (response?.clientSecret) {
                    confirmPayment(response.clientSecret);
                }
            },
            onError: () => {
                setErrorMessage("Error creating payment intent.");
                setLoading(false);
            },
            data: { amount: data.amount },
        });
    };

    const confirmPayment = async (secret: string) => {
        const { elements } = await stripe;

        const cardElement = elements?.getElement(CardElement);
        const { error, paymentIntent } = await stripe.confirmCardPayment(
            secret,
            {
                payment_method: {
                    card: cardElement!,
                },
            }
        );

        if (error) {
            setErrorMessage(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            toast.success("Payment successful!");
            get(route("payment.success"));
        }
        setLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4"
        >
            <h2 className="text-2xl font-semibold mb-6 text-center">
                გადახდის ფორმა
            </h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    ბარათის მფლობელი:
                </label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    min="0"
                    required
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
                    თანხა (USD):
                </label>
                <input
                    type="number"
                    value={data.amount}
                    onChange={(e) => setData("amount", e.target.value)}
                    min="0"
                    required
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
                    კრედიტული/დებეტური ბარათი:
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
                disabled={!stripe || loading || processing}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                {loading ? "Processing..." : "გადახდა"}
            </button>
        </form>
    );
};

export default CheckoutForm;
