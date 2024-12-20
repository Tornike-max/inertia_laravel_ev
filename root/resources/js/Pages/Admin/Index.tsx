import Card from "@/Components/Card";
import CommentsList from "@/Components/CommentsList";
import LatestUsers from "@/Components/LatestUsers";
import TowTrucksList from "@/Components/TowTrucksList";
import VehiclesTable from "@/Components/VehiclesTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

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
    comments,
}: PageProps) => {
    const { delete: destroy, processing } = useForm();

    const handleSubmit = (id: number) => {
        destroy(route("admin.users.delete", id), {
            onSuccess: () => {
                toast.success("მომხმარებელი წარმატებით წაიშალა.");
            },
            onError: () => {
                toast.error("დაფიქსირდა შეცდომა! თავიდან სცადეთ.");
            },
        });
    };
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

                <LatestUsers
                    users={users}
                    destroy={destroy}
                    processing={processing}
                    handleSubmit={handleSubmit}
                />

                <VehiclesTable vehicles={vehicles} />

                <TowTrucksList towTrucks={evacuators} />

                <CommentsList comments={comments} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
