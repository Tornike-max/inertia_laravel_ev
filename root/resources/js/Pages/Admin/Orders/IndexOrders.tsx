// @ts-nocheck

import Dropdown from "@/Components/Dropdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import {
    HiEllipsisVertical,
    HiOutlineEye,
    HiOutlinePencil,
    HiOutlineTrash,
} from "react-icons/hi2";

const IndexOrders = ({ auth, orders }: PageProps) => {
    const { delete: destroy, processing } = useForm(
        {},
        {
            preserveState: true,
        }
    );
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
            <Head title="შეკვეთების ცხრილი" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <h3 className="text-lg font-semibold">შეკვეთები</h3>
                    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        საიდან
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        სად
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ფასი
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        სტატუსი
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        მოქმედებები
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {orders?.data?.map(
                                    (order: {
                                        price: string;
                                        id: number;
                                        pickup_location: string;
                                        dropoff_location: string;
                                        status: string;
                                    }) => (
                                        <tr
                                            className="hover:bg-slate-50 duration-300 transition-all ease-in-out"
                                            key={order.id}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {order.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {order.pickup_location}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {order.dropoff_location}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {order.price || "NAN"} ₾
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span
                                                    className={`p-1 sm:p-2 rounded-xl ${
                                                        order.status ===
                                                        "pending"
                                                            ? "bg-yellow-500"
                                                            : order.status ===
                                                              "processing"
                                                            ? "bg-blue-500"
                                                            : order.status ===
                                                              "completed"
                                                            ? "bg-green-500"
                                                            : "bg-red-500"
                                                    }  text-slate-100`}
                                                >
                                                    {`${order.status
                                                        .slice(0, 1)
                                                        .toUpperCase()}${order.status.slice(
                                                        1
                                                    )}`}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="relative ms-3">
                                                    <Dropdown>
                                                        <Dropdown.Trigger>
                                                            <span className="inline-flex rounded-md">
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-light transition duration-150 ease-in-out hover:text-teal focus:outline-none"
                                                                >
                                                                    <HiEllipsisVertical className="text-2xl text-gray-800" />
                                                                </button>
                                                            </span>
                                                        </Dropdown.Trigger>

                                                        <Dropdown.Content>
                                                            <Dropdown.Link
                                                                href={route(
                                                                    "admin.order.show",
                                                                    order.id
                                                                )}
                                                                className="flex items-center justify-start gap-2"
                                                            >
                                                                <HiOutlineEye className="text-xl" />
                                                                <span>
                                                                    ნახვა
                                                                </span>
                                                            </Dropdown.Link>
                                                            <Dropdown.Link
                                                                href={route(
                                                                    "admin.orders.edit",
                                                                    order.id
                                                                )}
                                                                className="flex items-center justify-start gap-2"
                                                            >
                                                                <HiOutlinePencil className="text-xl" />
                                                                <span>
                                                                    შესწორება
                                                                </span>
                                                            </Dropdown.Link>
                                                            <form
                                                                onSubmit={() =>
                                                                    handleSubmit(
                                                                        order.id
                                                                    )
                                                                }
                                                            >
                                                                <button
                                                                    type="submit"
                                                                    className="flex items-center justify-start gap-2  w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                                                >
                                                                    <HiOutlineTrash className="text-xl" />
                                                                    <span>
                                                                        {processing
                                                                            ? "დაელოდეთ..."
                                                                            : "წაშლა"}
                                                                    </span>
                                                                </button>
                                                            </form>
                                                        </Dropdown.Content>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                        <div className="flex items-center justify-between mt-4 py-6 px-4">
                            <div className="flex-1 flex items-center justify-start">
                                <span className="text-sm text-gray-600">
                                    Showing {orders?.from} to {orders?.to} of{" "}
                                    {orders?.total} orders
                                </span>
                            </div>
                            <nav className="flex items-center justify-center space-x-2">
                                {orders?.links.map(
                                    (link: {
                                        url: string;
                                        active: boolean;
                                        label: string;
                                    }) => (
                                        <Link
                                            key={link.label}
                                            href={link.url || "#"}
                                            className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors duration-200 ease-in-out flex items-center ${
                                                link.active
                                                    ? "bg-teal text-slate-100 border-teal-500"
                                                    : "text-slate-800  border-gray-300 hover:bg-light"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    )
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default IndexOrders;
