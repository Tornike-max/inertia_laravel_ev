// @ts-nocheck
import { Link } from "@inertiajs/react";
import {
    HiEllipsisVertical,
    HiOutlineEye,
    HiOutlinePencil,
    HiOutlineTrash,
} from "react-icons/hi2";
import Dropdown from "./Dropdown";

import { ReactElement, JSXElementConstructor, ReactNode, Key } from "react";

const VehiclesTable = ({ vehicles }: { vehicles: unknown }) => {
    console.log(vehicles);
    return (
        <div className="mx-auto max-w-7xl w-full sm:px-6 lg:px-8 space-y-8">
            <h3 className="text-lg font-semibold">მომხმარებლები</h3>
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ბრენდი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                მოდელი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                მფლობელი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                მოქმედებები
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {vehicles?.data?.map(
                            (vehicle: {
                                id: number;
                                make: string;
                                model: string;
                                user_id: string;
                            }) => (
                                <tr
                                    className="hover:bg-gray-50  duration-300 transition-all ease-in-out"
                                    key={vehicle.id}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {vehicle.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {vehicle.make}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {vehicle.model}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {vehicle.user_id}
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center justify-center rounded-full bg-gray-100 p-2 hover:bg-gray-200 focus:outline-none"
                                                >
                                                    <HiEllipsisVertical className="text-xl text-gray-600" />
                                                </button>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={"#"}
                                                    className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
                                                >
                                                    <HiOutlineEye className="text-lg" />
                                                    <span>ნახვა</span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={""}
                                                    className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
                                                >
                                                    <HiOutlinePencil className="text-lg" />
                                                    <span>შესწორება</span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={""}
                                                    className="flex items-center gap-2 text-gray-700 hover:text-red-600"
                                                >
                                                    <HiOutlineTrash className="text-lg" />
                                                    <span>წაშლა</span>
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-600">
                    Showing {vehicles?.from} to {vehicles?.to} of{" "}
                    {vehicles?.total} vehicles
                </div>
                <nav className="flex items-center justify-center space-x-2">
                    {vehicles?.links.map(
                        (link: {
                            label:
                                | boolean
                                | ReactElement<
                                      any,
                                      string | JSXElementConstructor<any>
                                  >
                                | Iterable<ReactNode>
                                | Key
                                | null
                                | undefined;
                            url: any;
                            active: any;
                        }) => (
                            <Link
                                key={link.label}
                                href={link.url || "#"}
                                className={`px-4 py-2 border rounded-full text-sm font-medium transition-colors duration-200 ease-in-out flex items-center ${
                                    link.active
                                        ? "bg-teal-500 text-white border-teal-500"
                                        : "text-teal-500 border-gray-300 hover:bg-teal-100"
                                }`}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>
            </div>
        </div>
    );
};

export default VehiclesTable;
