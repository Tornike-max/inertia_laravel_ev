import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import Button from "@/Components/Button";
import toast from "react-hot-toast";

const ShowOrder = ({ auth, order }: PageProps) => {
    const { delete: destroy, processing } = useForm();
    const handleSubmit = (id: number) => {
        destroy(route("admin.order.delete", id), {
            onSuccess: () => {
                toast.success("შეკვეთა წარმატებით წაიშალა მონაცემთა ბაზიდან");
            },
            onError: () => {
                toast.error("დაფიქსირდა შეცდომა, გთხოვთ ახლიდან სცადოთ!");
            },
        });
    };
    return (
        <AuthenticatedLayout header={true}>
            <Head title={`შეკვეთის დეტალები`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <Link
                        className="py-2 px-3 rounded-lg font-serif border border-teal hover:bg-teal hover:text-slate-50 duration-300 transition-all ease-in-out"
                        href={route("admin.orders")}
                    >
                        უკან დაბრუნება
                    </Link>
                    <h3 className="text-lg font-semibold">შეკვეთის დეტალები</h3>
                    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-gray-500">
                                    <strong>ID:</strong> #{order.id}
                                </p>
                                <p className="text-gray-500">
                                    <strong>საიდან:</strong>{" "}
                                    {order.pickup_location}
                                </p>
                                <p className="text-gray-500">
                                    <strong>სად:</strong>{" "}
                                    {order.dropoff_location}
                                </p>
                                <p className="text-gray-500">
                                    <strong>ფასი:</strong> {order.price} GEL
                                </p>
                                <p className="text-gray-500">
                                    <strong>სტატუსი:</strong> {order.status}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-500">
                                    <strong>შეკვეთის დეტალები:</strong>{" "}
                                    {order.order_details}
                                </p>
                                <p className="text-gray-500">
                                    <strong>შეკვეთის თარიღი:</strong>{" "}
                                    {new Date(
                                        order.order_date
                                    ).toLocaleDateString() || "არასამუშაო"}
                                </p>
                                <p className="text-gray-500">
                                    <strong>შექმნის თარიღი:</strong>{" "}
                                    {new Date(
                                        order.created_at
                                    ).toLocaleDateString() || "არასამუშაო"}
                                </p>
                                <p className="text-gray-500">
                                    <strong>ბოლო განახლება:</strong>{" "}
                                    {new Date(
                                        order.updated_at
                                    ).toLocaleDateString() || "არასამუშაო"}
                                </p>
                                <p className="text-gray-500">
                                    <strong>შეკვეთის ავტორი:</strong> #
                                    {order.user_id}
                                </p>
                            </div>
                        </div>
                    </div>
                    {order.completion_date && (
                        <div className="mt-4">
                            <h4 className="text-lg font-semibold">
                                დამატებითი ინფორმაცია
                            </h4>
                            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md p-6">
                                <p className="text-gray-500">
                                    <strong>Completion Date:</strong>{" "}
                                    {new Date(
                                        order.completion_date
                                    ).toLocaleDateString() || "არასამუშაო"}
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="w-full flex justify-end items-center gap-2">
                        <form onSubmit={() => handleSubmit(order?.id)}>
                            <Button
                                type="submit"
                                className="bg-red-500 hover:bg-red-600"
                            >
                                {processing ? "დაელოდეთ..." : "წაშლა"}
                            </Button>
                        </form>
                        <Link
                            href={route("admin.orders.edit", order.id)}
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

export default ShowOrder;
