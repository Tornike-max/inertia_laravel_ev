// @ts-nocheck

import { User } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import {
    HiEllipsisVertical,
    HiOutlineEye,
    HiOutlinePencil,
    HiOutlineTrash,
} from "react-icons/hi2";
import Dropdown from "./Dropdown";
import toast from "react-hot-toast";

const UsersList = ({ users }: { users: unknown }) => {
    const { delete: destroy, processing, data } = useForm();
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
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
            <h3 className="text-lg font-semibold">მომხმარებლები</h3>
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                სახელი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ელ. ფოსტა
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                მობილური
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                როლი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                მოქმედებები
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users?.data?.map((user: User) => (
                            <tr
                                className="hover:bg-slate-50 duration-300 transition-all ease-in-out"
                                key={user.id}
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.phone_number || "NAN"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {`${user.status
                                        .slice(0, 1)
                                        .toUpperCase()}${user.status.slice(1)}`}
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
                                                        "admin.user",
                                                        user.id
                                                    )}
                                                    className="flex items-center justify-start gap-2"
                                                >
                                                    <HiOutlineEye className="text-xl" />
                                                    <span>ნახვა</span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route(
                                                        "admin.users.edit",
                                                        user.id
                                                    )}
                                                    className="flex items-center justify-start gap-2"
                                                >
                                                    <HiOutlinePencil className="text-xl" />
                                                    <span>შესწორება</span>
                                                </Dropdown.Link>
                                                <form
                                                    onSubmit={() =>
                                                        handleSubmit(user.id)
                                                    }
                                                >
                                                    <button
                                                        type="submit"
                                                        className="flex items-center justify-start gap-2  w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                                    >
                                                        <HiOutlineTrash className="text-xl" />
                                                        <span>წაშლა</span>
                                                    </button>
                                                </form>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-between mt-4 py-6 px-4">
                    <div className="flex-1 flex items-center justify-start">
                        <span className="text-sm text-gray-800">
                            Showing {users?.from} to {users?.to} of{" "}
                            {users?.total} users
                        </span>
                    </div>
                    <nav className="flex items-center justify-center space-x-2">
                        {users?.links.map((link) => (
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
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default UsersList;
