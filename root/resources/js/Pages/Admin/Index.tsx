import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const Index = ({ auth }: PageProps) => {
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
                    Index
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
