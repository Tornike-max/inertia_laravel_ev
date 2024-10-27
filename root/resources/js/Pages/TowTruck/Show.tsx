import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

interface User {
    id: number;
    name: string;
    email: string;
    phone_number: string | null;
    role: string;
    status: string;
}

interface Evacuator {
    id: number;
    driver_name: string;
    truck_number: string;
    availability_status: string;
    location: string;
    image: string;
    driver_phone: string;
    user: User;
}

const Show = ({ auth, evacuator, evacuator_owner }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    {evacuator?.driver_name} - დეტალური ინფორმაცია
                </h2>
            }
        >
            <Head title={evacuator?.driver_name} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white shadow rounded-lg p-6">
                    <div className="w-full flex justify-start items-center py-2">
                        <Link
                            className="inline-flex items-center rounded-md border border-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-light text-white transition duration-150 ease-in-out hover:bg-teal focus:bg-teal focus:outline-none focus:ring-2 focus:ring-light focus:ring-offset-2 active:bg-teal"
                            href={route("evacuator.index")}
                        >
                            უკან დაბრუნება
                        </Link>
                    </div>

                    <img
                        src={evacuator?.image}
                        alt={evacuator?.driver_name}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                    />

                    <h3 className="text-2xl font-bold mb-2">
                        {evacuator?.driver_name}
                    </h3>

                    <div className="text-lg mb-4">
                        <span className="font-semibold">მანქანის ნომერი: </span>
                        {evacuator?.truck_number}
                    </div>

                    <div className="text-lg mb-4">
                        <span className="font-semibold">მდებარეობა: </span>
                        {evacuator?.location}
                    </div>

                    <div className="text-lg mb-4">
                        <span className="font-semibold">სტატუსი: </span>
                        <span
                            className={
                                evacuator?.availability_status ===
                                "ხელმისაწვდომი"
                                    ? "text-green-600"
                                    : "text-red-600"
                            }
                        >
                            {evacuator?.availability_status}
                        </span>
                    </div>

                    <div className="text-lg mb-4">
                        <span className="font-semibold">მძღოლის ტელეფონი:</span>
                        {evacuator?.driver_phone}
                    </div>

                    <hr className="my-6" />

                    <h4 className="text-xl font-semibold mb-2">
                        მფლობელის ინფორმაცია
                    </h4>
                    <div className="text-lg mb-4">
                        <span className="font-semibold">სახელი: </span>
                        {evacuator_owner?.name}
                    </div>
                    <div className="text-lg mb-4">
                        <span className="font-semibold">ელ.ფოსტა: </span>
                        {evacuator_owner?.email}
                    </div>
                    <div className="text-lg mb-4">
                        <span className="font-semibold">ტელეფონი: </span>
                        {evacuator_owner?.phone_number ?? "არ არის მითითებული"}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
