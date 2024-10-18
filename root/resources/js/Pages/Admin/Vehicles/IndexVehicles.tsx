import NavLink from "@/Components/NavLink";
import UsersList from "@/Components/UsersList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const IndexVehicles = ({ auth, users }: PageProps) => {
    return (
        <AuthenticatedLayout header={true}>
            <Head title="მანქანების ცხრილი" />
            <div className="py-12"></div>
        </AuthenticatedLayout>
    );
};

export default IndexVehicles;
