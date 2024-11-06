import LiveMap from "@/Components/LiveMap";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Map = ({ auth, evacuator }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-semibold leading-tight text-gray-900">
                    ევაკუატორის ადგილმდებარეობა
                </h2>
            }
        >
            <Head title="ლოკაცია" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl w-full sm:px-6 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <LiveMap towTruckId={30} evacuator={evacuator} />
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                                ევაკუატორის მიმდინარე ლოკაცია
                            </h3>
                            <p className="text-gray-500 mt-1">
                                ტექნიკა გზაშია და თქვენსკენ მოემართება
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Map;
