import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import Button from "@/Components/Button";
import toast from "react-hot-toast";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const Showevacuator = ({ auth, evacuator }: PageProps) => {
    const { delete: destroy, processing } = useForm();
    const handleSubmit = (id: number | undefined) => {
        destroy(route("admin.evacuator.delete", id), {
            onSuccess: () => {
                toast.success("შეკვეთა წარმატებით წაიშალა მონაცემთა ბაზიდან");
            },
            onError: () => {
                toast.error("დაფიქსირდა შეცდომა, გთხოვთ ახლიდან სცადოთ!");
            },
        });
    };

    return (
        <AuthenticatedLayout header={true}>
            <Head title={`შეკვეთის დეტალები`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <Link
                        className="py-1 px-2 rounded-lg font-serif border border-teal hover:bg-teal hover:text-slate-50 duration-300 transition-all ease-in-out flex items-center justify-center gap-1 w-[110px]"
                        href={route("admin.evacuators")}
                    >
                        {" "}
                        <HiOutlineArrowLeft /> <span>უკან</span>
                    </Link>
                    <h3 className="text-lg font-semibold">
                        ევაკუატორის დეტალები
                    </h3>
                    <div className="overflow-hidden bevacuator bevacuator-gray-200 rounded-lg shadow-md p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-gray-500">
                                    <strong>ID:</strong> #{evacuator?.id}
                                </p>
                                <p className="text-gray-500">
                                    <strong>მძღოლის სახელი:</strong>{" "}
                                    {evacuator?.driver_name}
                                </p>
                                <p className="text-gray-500">
                                    <strong>ევაკუატორის ნომერი:</strong>{" "}
                                    {evacuator?.truck_number}
                                </p>
                                <p className="text-gray-500">
                                    <strong>ლოკაცია:</strong>{" "}
                                    {evacuator?.location}
                                </p>
                                <p className="text-gray-500">
                                    <strong>სტატუსი:</strong>{" "}
                                    {evacuator?.availability_status}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-500">
                                    <strong>დარეგისტრირდა:</strong>{" "}
                                    {new Date(
                                        evacuator?.created_at || ""
                                    ).toLocaleDateString()}
                                </p>
                                <p className="text-gray-500">
                                    <strong>განახლდა:</strong>{" "}
                                    {new Date(
                                        evacuator?.updated_at || ""
                                    ).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end items-center gap-2">
                        <form onSubmit={() => handleSubmit(evacuator?.id)}>
                            <Button
                                type="submit"
                                className="bg-red-500 hover:bg-red-600"
                            >
                                {processing ? "დაელოდეთ..." : "წაშლა"}
                            </Button>
                        </form>
                        <Link
                            href={route("admin.evacuator.edit", evacuator?.id)}
                            className="inline-flex items-center rounded-md bevacuator bevacuator-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out bg-light hover:bg-teal focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-green-900 "
                        >
                            განახლება
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Showevacuator;
