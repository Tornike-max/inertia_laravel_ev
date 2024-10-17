import Button from "@/Components/Button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

const ShowUser = ({ auth, user }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    მომხმარებლის დეტალები
                </h2>
            }
        >
            <Head title={`${user.name} - დეტალები`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <Link
                        className="py-2 px-3 rounded-lg font-serif border border-teal hover:bg-teal hover:text-slate-50 duration-300 transition-all ease-in-out"
                        href={route("admin.dashboard")}
                    >
                        უკან დაბრუნება
                    </Link>
                    <h3 className="text-lg font-semibold">{`${user.name} - დეტალები`}</h3>
                    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-gray-500">
                                    <strong>ID:</strong> {user.id}
                                </p>
                                <p className="text-gray-500">
                                    <strong>სახელი:</strong> {user.name}
                                </p>
                                <p className="text-gray-500">
                                    <strong>ელ. ფოსტა:</strong> {user.email}
                                </p>
                                <p className="text-gray-500">
                                    <strong>მობილური:</strong>{" "}
                                    {user.phone_number || "არასამუშაო"}
                                </p>
                                <p className="text-gray-500">
                                    <strong>როლი:</strong> {user.role}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-500">
                                    <strong>მისამართი:</strong>{" "}
                                    {user.location || "არასამუშაო"}
                                </p>
                                <p className="text-gray-500">
                                    <strong>რეგისტრაციის თარიღი:</strong>{" "}
                                    {new Date(
                                        user.created_at
                                    ).toLocaleDateString() || "არასამუშაო"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">
                            ბონუს ინფორმაცია
                        </h4>
                        <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md p-6">
                            <p className="text-gray-500">
                                პროფილი ბოლო განახლებული:{" "}
                                {user.updated_at || "არასამუშაო"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ShowUser;
