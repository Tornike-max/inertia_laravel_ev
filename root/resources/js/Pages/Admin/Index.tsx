import Dropdown from "@/Components/Dropdown";
import UsersList from "@/Components/UsersList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import {
    HiEllipsisVertical,
    HiOutlineEye,
    HiOutlinePencil,
    HiOutlineTrash,
} from "react-icons/hi2";

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
                <UsersList users={users} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
