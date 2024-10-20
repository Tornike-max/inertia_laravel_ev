// @ts-nocheck

import Dropdown from "@/Components/Dropdown";
import { formatDate } from "@/functions/helpers";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    Key,
    ReactPortal,
} from "react";
import {
    HiEllipsisVertical,
    HiOutlineEye,
    HiOutlinePencil,
    HiOutlineTrash,
} from "react-icons/hi2";

const IndexVehicles = ({ auth, vehicles }: PageProps) => {
    const { processing, data, setData } = useForm();

    const handleSubmit = (id: number) => {};
    console.log(vehicles);
    return (
        <AuthenticatedLayout header={true}>
            <Head title="მანქანების ცხრილი" />
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
                                        ბრენდი
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        მოდელი
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        წელი
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        კილო
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        დარეგისტრირდა
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        მოქმედებები
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {vehicles?.data?.map(
                                    (vehicle: {
                                        id: number;
                                        make: string;
                                        model: string;
                                        year: number;
                                        kg: number;
                                        created_at: string;
                                    }) => (
                                        <tr
                                            className="hover:bg-slate-50 duration-300 transition-all ease-in-out"
                                            key={vehicle.id}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {vehicle.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {vehicle.make}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {vehicle.model}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {vehicle.year || "NAN"} წ
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {vehicle.kg || "NAN"} კგ
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {formatDate(vehicle.created_at)}
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
                                                                href={"#"}
                                                                className="flex items-center justify-start gap-2"
                                                            >
                                                                <HiOutlineEye className="text-xl" />
                                                                <span>
                                                                    ნახვა
                                                                </span>
                                                            </Dropdown.Link>
                                                            <Dropdown.Link
                                                                href={route(
                                                                    "admin.vehicles.edit",
                                                                    vehicle.id
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
                                                                        vehicle.id
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
                                    Showing {vehicles?.from} to {vehicles?.to}{" "}
                                    of {vehicles?.total} vehicles
                                </span>
                            </div>
                            <nav className="flex items-center justify-center space-x-2">
                                {vehicles?.links.map(
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

export default IndexVehicles;
