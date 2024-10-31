// @ts-nocheck
import { Link, useForm } from "@inertiajs/react";
import {
    HiEllipsisVertical,
    HiOutlineEye,
    HiOutlinePencil,
    HiOutlineTrash,
} from "react-icons/hi2";
import Dropdown from "./Dropdown";

import { ReactElement, JSXElementConstructor, ReactNode, Key } from "react";
import { formatDate, showImage } from "@/functions/helpers";

const CommentsList = ({ comments }: { comments: unknown }) => {
    const { delete: destroy, processing } = useForm();
    const handleDelete = (e, id: number) => {
        e.preventDefault();
        destroy(route("admin.delete.comment", id));
    };
    return (
        <div className="mx-auto max-w-7xl w-full">
            <h3 className="text-2xl font-semibold my-4 text-center">
                კომენტარები
            </h3>
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ავტორი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ევაკუატორი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                კომენტარი
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                შეიქმნა
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                განახლდა
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {comments?.data?.map(
                            (comment: {
                                id: number;
                                tow_truck_id: number;
                                author_id: number;
                                content: string;
                                created_at: string;
                                updated_at: string;
                            }) => (
                                <tr
                                    className="hover:bg-gray-50  duration-300 transition-all ease-in-out"
                                    key={comment.id}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {comment.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {comment.author.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {comment.tow_truck_id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {comment.content}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {formatDate(comment.created_at)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {formatDate(comment.updated_at)}
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
                                                        "admin.edit.comment",
                                                        comment.id
                                                    )}
                                                    className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
                                                >
                                                    <HiOutlinePencil className="text-lg" />
                                                    <span>შესწორება</span>
                                                </Dropdown.Link>
                                                <form
                                                    onSubmit={(e) =>
                                                        handleDelete(
                                                            e,
                                                            comment.id
                                                        )
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
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
                <div className="flex items-center justify-between py-6 px-4 mt-6">
                    <div className="text-sm text-gray-600">
                        Showing {comments?.from} to {comments?.to} of{" "}
                        {comments?.total} comments
                    </div>
                    <nav className="flex items-center justify-center space-x-2">
                        {comments?.links.map(
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

export default CommentsList;
