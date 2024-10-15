import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User } from "@/types";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, users }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    ადმინ პანელი
                </h2>
            }
        >
            <Head title="ჩვენი შესახებ" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <h3 className="text-lg font-semibold">მომხმარებლები</h3>
                    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
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
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users?.data?.map((user: User) => (
                                    <tr key={user.id}>
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
                                                .toUpperCase()}${user.status.slice(
                                                1
                                            )}`}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex-1 flex items-center justify-start">
                            <span className="text-sm text-gray-600">
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
                                            ? "bg-teal-500 text-white border-teal-500"
                                            : "text-teal-500 border-gray-300 hover:bg-teal-100"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
