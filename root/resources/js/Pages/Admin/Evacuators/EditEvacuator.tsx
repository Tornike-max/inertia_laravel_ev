import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import toast from "react-hot-toast";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const EditEvacuator = ({ auth, order, user, evacuator }: PageProps) => {
    const { errors, setData, data, put, processing } = useForm({
        driver_name: evacuator?.driver_name || "",
        truck_number: evacuator?.truck_number || "",
        availability_status: evacuator?.availability_status || "",
        location: evacuator?.location || "",
    });

    const handleSubmit = () => {
        put(route("admin.evacuator.update", evacuator?.id), {
            onSuccess: () => {
                toast.success("წარმატებით განახლდა");
            },
            onError: () => {
                toast.error("დაფიქსირდა შეცდომა, თავიდან სცადეთ");
            },
        });
    };
    return (
        <AuthenticatedLayout header={true}>
            <Head title="ევაკუატორის განახლება" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-2">
                    <Link
                        className="py-1 px-2 rounded-lg font-serif border border-teal hover:bg-teal hover:text-slate-50 duration-300 transition-all ease-in-out flex items-center justify-center gap-1 w-[110px]"
                        href={route("admin.evacuators")}
                    >
                        <HiOutlineArrowLeft /> <span>უკან</span>
                    </Link>
                    <h3 className="text-lg font-semibold">
                        ევაკუატორის შესწორება
                    </h3>

                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex justify-center items-center flex-col gap-4"
                    >
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>მძღოლის სახელი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.driver_name}
                                onChange={(e) =>
                                    setData("driver_name", e.target.value)
                                }
                            />
                            <InputError message={errors.driver_name} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>ევაკუატორის ნომერი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.truck_number}
                                onChange={(e) =>
                                    setData("truck_number", e.target.value)
                                }
                            />
                            <InputError message={errors.truck_number} />
                        </div>

                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>ლოკაცია</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.location}
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                            />
                            <InputError message={errors.location} />
                        </div>

                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>სტატუსი</InputLabel>
                            <select
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal "
                                onChange={(e) =>
                                    setData(
                                        "availability_status",
                                        e.target.name
                                    )
                                }
                            >
                                <option value={"ხელმისაწვდომი"}>
                                    ხელმისაწვდომი
                                </option>
                                <option value={"დაკავებული"}>დაკავებული</option>
                            </select>

                            <InputError message={errors.availability_status} />
                        </div>

                        <div className="w-full flex  justify-end items-center gap-2">
                            <Link
                                className="bg-red-500 hover:bg-red-600 inline-flex items-center rounded-md border border-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out  focus:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
                                href={route("admin.evacuators")}
                            >
                                უკან დაბრუნება
                            </Link>
                            <Button
                                className="bg-light hover:bg-teal"
                                type="submit"
                                disabled={processing}
                            >
                                განაახლე
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditEvacuator;
