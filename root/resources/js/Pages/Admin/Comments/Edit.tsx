import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";
import toast from "react-hot-toast";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const Edit = ({ comment }: { comment: { content: string; id: number } }) => {
    const { put, processing, data, setData, errors } = useForm({
        content: comment.content || "",
    });

    const handleSubmit = () => {
        put(route("admin.update.comment", comment.id), {
            onSuccess: () => {
                toast.success("კომენტარი წარმატებით განახლდა");
            },
            onError: () => {
                toast.error("სამწუხაროდ, შესწორება ვერ მოხერხდა");
            },
        });
    };
    return (
        <AuthenticatedLayout header={true}>
            <Head title="კომენტარის შესწორება" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-2">
                    <Link
                        className="py-1 px-2 rounded-lg font-serif border border-teal hover:bg-teal hover:text-slate-50 duration-300 transition-all ease-in-out flex items-center justify-center gap-1 w-[110px]"
                        href={route("admin.dashboard")}
                    >
                        {" "}
                        <HiOutlineArrowLeft /> <span>უკან</span>
                    </Link>
                    <h3 className="text-lg font-semibold">
                        კომენტარის შესწორება
                    </h3>

                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex justify-center items-center flex-col gap-4"
                    >
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>კომენტარი</InputLabel>
                            <textarea
                                value={data.content}
                                onChange={(e) =>
                                    setData("content", e.target.value)
                                }
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal"
                            ></textarea>
                            <InputError message={errors.content} />
                        </div>
                        <div className="w-full flex justify-end items-center gap-2">
                            <Button
                                type="button"
                                onClick={() => {}}
                                className="bg-red-400 hover:bg-red-500"
                                disabled={processing}
                            >
                                წაშლა
                            </Button>
                            <Button
                                type="submit"
                                className="bg-light hover:bg-teal"
                                disabled={processing}
                            >
                                {processing ? "დაელოდეთ..." : "განახლება"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
