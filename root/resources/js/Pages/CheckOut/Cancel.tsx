import Button from "@/Components/Button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { HiOutlineCheckBadge, HiOutlineXMark } from "react-icons/hi2";

const Cancel = ({ auth }: PageProps) => {
    useEffect(() => {
        toast.success("დაფიქსირდა შეცდომა");
    }, []);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold leading-tight text-gray-900">
                    შეცდომა
                </h2>
            }
        >
            <Head title="შეცდომა" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl w-full sm:px-6 lg:px-8">
                    <h1 className="w-full flex justify-center items-center gap-2">
                        <span className="text-2xl tex-green-500">
                            გადახდა ვერ შესრულდა
                        </span>{" "}
                        <HiOutlineXMark className="text-5xl text-red-500" />
                    </h1>
                    <div className="w-full flex justify-center items-center mt-8">
                        <Link
                            href={route("dashboard")}
                            className="inline-flex items-center rounded-md border border-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out bg-light hover:bg-teal focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:bg-green-900"
                        >
                            მთავარ გვერდზე დაბრუნებასს
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Cancel;
