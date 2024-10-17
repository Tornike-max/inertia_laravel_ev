import Button from "@/Components/Button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

const EditUser = ({ auth, user }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    მომხმარებლის დეტალები
                </h2>
            }
        >
            <Head title={`${user.name} - შესწორება`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <Link
                        className="py-2 px-3 rounded-lg font-serif border border-teal hover:bg-teal hover:text-slate-50 duration-300 transition-all ease-in-out"
                        href={route("admin.dashboard")}
                    >
                        უკან დაბრუნება
                    </Link>
                    <h3 className="text-lg font-semibold">{`${user.name}-ს შესწორება`}</h3>
                    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md p-6"></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditUser;
