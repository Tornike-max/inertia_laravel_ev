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
import { showImage } from "@/functions/helpers";

const TowTrucksList = ({ towTrucks }: { towTrucks: unknown }) => {
    return (
        <div className="mx-auto max-w-7xl w-full">
            <h3 className="text-2xl font-semibold my-4 text-center">
                ევაკუატორები
            </h3>
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                მძღოლის სახელი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                მძღოლის ნომერი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ევაკუატორის ნომერი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                სტატუსი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ლოკაცია
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {towTrucks?.data?.map(
                            (towTruck: {
                                id: number;
                                driver_name: string;
                                truck_number: string;
                                driver_phone: string;
                                image: string;
                                availability_status: string;
                                location: string;
                            }) => (
                                <tr
                                    className="hover:bg-gray-50  duration-300 transition-all ease-in-out"
                                    key={towTruck.id}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        <img
                                            className="w-24"
                                            src={showImage(towTruck.image)}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {towTruck.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {towTruck.driver_name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {towTruck.driver_phone}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {towTruck.truck_number}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {towTruck.availability_status}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {towTruck.location}
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
                                                    href={route(
                                                        "admin.evacuator.show",
                                                        towTruck.id
                                                    )}
                                                    className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
                                                >
                                                    <HiOutlineEye className="text-lg" />
                                                    <span>ნახვა</span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route(
                                                        "admin.evacuator.edit",
                                                        towTruck.id
                                                    )}
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
                <div className="flex items-center justify-between py-6 px-4 mt-6">
                    <div className="text-sm text-gray-600">
                        Showing {towTrucks?.from} to {towTrucks?.to} of{" "}
                        {towTrucks?.total} towTrucks
                    </div>
                    <nav className="flex items-center justify-center space-x-2">
                        {towTrucks?.links.map(
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
    );
};

export default TowTrucksList;
