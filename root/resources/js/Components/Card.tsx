import { Link } from "@inertiajs/react";

const Card = ({ title, count }: { title: string; count: number }) => {
    return (
        <Link
            href={
                title === "მომხმარებელი"
                    ? route("admin.users")
                    : title === "შეკვეთა"
                    ? route("admin.orders")
                    : title === "ევაკუატორი"
                    ? route("admin.evacuators")
                    : title === "აუტო მანქანები"
                    ? route("admin.vehicles")
                    : route("admin.dashboard")
            }
            className="bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg p-6 flex flex-col items-center justify-center"
        >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-3xl font-bold text-teal-500">{count}</p>
        </Link>
    );
};

export default Card;
