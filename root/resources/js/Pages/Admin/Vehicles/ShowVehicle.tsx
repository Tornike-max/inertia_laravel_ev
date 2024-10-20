import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Vehicle } from "@/types";
import Button from "@/Components/Button";
import toast from "react-hot-toast";

interface VehiclePageProps extends PageProps {
    vehicle: Vehicle;
}

const ShowVehicle = ({ auth, vehicle }: VehiclePageProps) => {
    const { processing, delete: destroy } = useForm();
    const handleSubmit = (id: number) => {
        destroy(route("admin.vehicle.delete", id), {
            onSuccess: () => {
                toast.success("მანქანა წარმატებით წაიშალა");
            },
            onError: () => {
                toast.error("დაფიქსირდა შეცდომა, თავიდან სცადეთ");
            },
        });
    };
    return (
        <AuthenticatedLayout header={true}>
            <Head title={`ტრანსპორტის დეტალები`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <Link
                        className="py-2 px-3 rounded-lg font-serif border border-teal hover:bg-teal hover:text-slate-50 duration-300 transition-all ease-in-out"
                        href={route("admin.vehicles")}
                    >
                        უკან დაბრუნება
                    </Link>
                    <h3 className="text-lg font-semibold">
                        ტრანსპორტის დეტალები
                    </h3>
                    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-gray-500">
                                    <strong>ID:</strong> #{vehicle.id}
                                </p>
                                <p className="text-gray-500">
                                    <strong>მწარმოებელი:</strong> {vehicle.make}
                                </p>
                                <p className="text-gray-500">
                                    <strong>მოდელი:</strong> {vehicle.model}
                                </p>
                                <p className="text-gray-500">
                                    <strong>წელი:</strong> {vehicle.year}
                                </p>
                                <p className="text-gray-500">
                                    <strong>ფერი:</strong> {vehicle.color}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-500">
                                    <strong>მანქანის წონა (კგ):</strong>{" "}
                                    {vehicle.kg}
                                </p>
                                <p className="text-gray-500">
                                    <strong>სატრანსპორტო ნომერი:</strong>{" "}
                                    {vehicle.license_plate}
                                </p>
                                <p className="text-gray-500">
                                    <strong>შექმნის თარიღი:</strong>{" "}
                                    {new Date(
                                        vehicle.created_at
                                    ).toLocaleDateString() || "არასამუშაო"}
                                </p>
                                <p className="text-gray-500">
                                    <strong>ბოლო განახლება:</strong>{" "}
                                    {new Date(
                                        vehicle.updated_at
                                    ).toLocaleDateString() || "არასამუშაო"}
                                </p>
                                <p className="text-gray-500">
                                    <strong>ავტორი:</strong> #{vehicle.user_id}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end items-center gap-2">
                        <form onSubmit={() => handleSubmit(vehicle?.id)}>
                            <Button
                                type="submit"
                                className="bg-red-500 hover:bg-red-600"
                            >
                                {processing ? "დაელოდეთ..." : "წაშლა"}
                            </Button>
                        </form>
                        <Link
                            href={route("admin.vehicles.edit", vehicle.id)}
                            className="inline-flex items-center rounded-md border border-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out bg-light hover:bg-teal focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-green-900 "
                        >
                            განახლება
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ShowVehicle;
