import Card from "@/Components/Card";
import LatestUsers from "@/Components/LatestUsers";
import VehiclesList from "@/Components/VehiclesTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User } from "@/types";
import { Head } from "@inertiajs/react";

const Index = ({
    auth,
    usersCount,
    evacuatorsCount,
    ordersCount,
    vehiclesCount,
    users,
    evacuators,
    vehicles,
    orders,
}: PageProps) => {
    return (
        <AuthenticatedLayout header={true}>
            <Head title="ადმინ-პანელი" />
            <div className="py-12 space-y-4">
                <div className="bg-light hover:bg-teal group mx-auto max-w-7xl duration-200 transition-all ease-in-out rounded-lg shadow-inner p-8">
                    <div className="mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-4">
                            <Card
                                title="მომხმარებელი"
                                count={usersCount || 0}
                            />
                            <Card title="შეკვეთა" count={ordersCount || 0} />
                            <Card
                                title="ევაკუატორი"
                                count={evacuatorsCount || 0}
                            />
                            <Card
                                title="აუტო მანქანები"
                                count={vehiclesCount || 0}
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-light hover:bg-teal mx-auto max-w-7xl duration-200 transition-all ease-in-out rounded-lg shadow-inner">
                    <div className="flex justify-center items-center text-center">
                        <div className="mx-auto w-full rounded-lg flex-col gap-y-4  p-6">
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <LatestUsers users={users} />
                            </dd>
                        </div>
                    </div>
                </div>
                <div className="bg-light hover:bg-teal mx-auto max-w-7xl duration-200 transition-all ease-in-out rounded-lg shadow-inner">
                    <div className="flex justify-center items-center text-center">
                        <div className="mx-auto w-full rounded-lg flex-col gap-y-4  p-6">
                            <dd className=" text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <VehiclesList vehicles={vehicles} />
                            </dd>
                        </div>
                    </div>
                </div>
                <div className="bg-light hover:bg-teal mx-auto max-w-7xl duration-200 transition-all ease-in-out rounded-lg shadow-inner">
                    <div className="flex justify-center items-center text-center">
                        <div className="mx-auto w-full rounded-lg flex-col gap-y-4  p-6">
                            <dd className=" text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <VehiclesList vehicles={vehicles} />
                            </dd>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
