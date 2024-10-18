import NavLink from "@/Components/NavLink";
import UsersList from "@/Components/UsersList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const IndexUsers = ({ auth, users }: PageProps) => {
    return (
        <AuthenticatedLayout header={true}>
            <Head title="მომხმარებლების ცხრილი" />
            <div className="py-12">
                <UsersList users={users} />
            </div>
        </AuthenticatedLayout>
    );
};

export default IndexUsers;
