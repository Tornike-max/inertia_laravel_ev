import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({ auth, about, currentOrder }: PageProps) {
    return (
        <AuthenticatedLayout
            currentOrder={currentOrder}
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    ჩვენი კომპანია
                </h2>
            }
        >
            <Head title="ჩვენი შესახებ" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal text-center font-bold text-2xl">
                            ჩვენი მისია
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <p className="text-gray-700 ">
                                {about?.ourMission}
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal text-center font-bold text-2xl">
                            რატომ ჩვენ?
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <p className="text-gray-700 ">{about?.whyUs}</p>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal text-center font-bold text-2xl">
                            ჩვენი ისტორია
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <p className="text-gray-700">{about?.ourHistory}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
