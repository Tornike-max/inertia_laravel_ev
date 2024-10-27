// @ts-nocheck

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, TowTruck } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { GrStatusGood } from "react-icons/gr";

const Index = ({ auth, evacuators }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    ევაკუატორების სია
                </h2>
            }
        >
            <Head title="მთავარი" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-12">
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {evacuators?.data?.map((evacuator: TowTruck) => (
                            <Link
                                href={route("evacuator.show", evacuator.id)}
                                key={evacuator.id}
                                className="p-4 bg-white shadow rounded-lg"
                            >
                                <img
                                    src={evacuator.image}
                                    alt={evacuator.name}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold flex items-center gap-2">
                                        <HiOutlineUser />
                                        {evacuator.driver_name}
                                    </h3>
                                    <p className="mt-1 text-gray-600 flex items-center gap-2">
                                        <IoNavigateCircleOutline />
                                        {evacuator.location}
                                    </p>
                                    <p
                                        className={`mt-1 text-sm flex items-center gap-2 ${
                                            evacuator.availability_status ===
                                            "ხელმისაწვდომი"
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }`}
                                    >
                                        <GrStatusGood />
                                        {evacuator.availability_status ===
                                        "ხელმისაწვდომი"
                                            ? "ხელმისაწვდომია"
                                            : "დაკავებულია"}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
