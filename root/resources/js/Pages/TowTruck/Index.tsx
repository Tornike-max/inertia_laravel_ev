// @ts-nocheck

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, TowTruck } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { GrStatusGood } from "react-icons/gr";
import { showImage } from "@/functions/helpers";
import TowTruckCard from "@/Components/TowTruckCard";
import { useState } from "react";
import CreateOrderModal from "@/Components/CreateOrderModal";

const Index = ({ auth, evacuators, services, currentOrder }: PageProps) => {
    return (
        <AuthenticatedLayout
            currentOrder={currentOrder}
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    ევაკუატორების სია
                </h2>
            }
        >
            <Head title="ევაკუატორები" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-12">
                    <div className="w-full flex justify-center items-center">
                        <Link
                            className="w-full  justify-center inline-flex items-center rounded-md border border-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-light text-white transition duration-150 ease-in-out hover:bg-teal focus:bg-teal focus:outline-none focus:ring-2 focus:ring-light focus:ring-offset-2 active:bg-teal"
                            href={route("evacuator.create")}
                        >
                            დაამატე ევაკუატორი
                        </Link>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {evacuators?.data?.map((evacuator: TowTruck) => (
                            <TowTruckCard
                                key={evacuator.id}
                                evacuator={evacuator}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
