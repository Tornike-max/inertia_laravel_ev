import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { Elements } from "@stripe/react-stripe-js";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import CheckoutForm from "./Pages/CheckOut/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

const stripePromise = loadStripe(
    "pk_test_51OlqzLAsljxtDLDChC8F1KvaW2GTUGa8upKSAlXw00lYgUWmNmsYfpVDY3nNYcOhKcYhkbkPwaQQfN41GpRnU43900scGN4DYi"
);

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                <Elements stripe={stripePromise}>
                    <App {...props} />
                </Elements>
                <Toaster />
            </>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
