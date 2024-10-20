import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { error } from "console";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const EditVehicle = ({ auth, vehicle, user, evacuator }: PageProps) => {
    const { errors, setData, data, put, processing } = useForm({
        make: vehicle?.make || "",
        model: vehicle?.model || "",
        year: vehicle?.year || "",
        kg: vehicle?.kg || "",
        color: vehicle?.color || "",
        license_plate: vehicle?.license_plate || "",
    });

    const handleSubmit = () => {
        put(route("admin.vehicles.update", vehicle?.id));
    };
    return (
        <AuthenticatedLayout header={true}>
            <Head title="მანქანის დეტალები" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-2">
                    <Link
                        className="py-1 px-2 rounded-lg font-serif border border-teal hover:bg-teal hover:text-slate-50 duration-300 transition-all ease-in-out flex items-center justify-center gap-1 w-[110px]"
                        href={route("admin.vehicles")}
                    >
                        {" "}
                        <HiOutlineArrowLeft /> <span>უკან</span>
                    </Link>
                    <h3 className="text-lg font-semibold">
                        მანქანის შესწორება
                    </h3>

                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex justify-center items-center flex-col gap-4"
                    >
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>მწარმოებელი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.make}
                                onChange={(e) =>
                                    setData("make", e.target.value)
                                }
                            />
                            <InputError message={errors.make} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>მოდელი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.model}
                                onChange={(e) =>
                                    setData("model", e.target.value)
                                }
                            />
                            <InputError message={errors.model} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>წელი</InputLabel>
                            <TextInput
                                className="w-full"
                                value={data.year}
                                onChange={(e) =>
                                    setData("year", e.target.value)
                                }
                            />
                            <InputError message={errors.year} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>კილოგრამი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.kg}
                                onChange={(e) => setData("kg", e.target.value)}
                            />
                            <InputError message={errors.kg} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>შეკვეთის დასრულების თარიღი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.color}
                                onChange={(e) =>
                                    setData("color", e.target.value)
                                }
                            />
                            <InputError message={errors.color} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>ფასი</InputLabel>
                            <TextInput
                                className="w-full"
                                value={data.license_plate}
                                onChange={(e) =>
                                    setData("license_plate", e.target.value)
                                }
                            />
                            <InputError message={errors.license_plate} />
                        </div>

                        <div className="w-full flex  justify-end items-center gap-2">
                            <Link
                                className="bg-red-500 hover:bg-red-600 inline-flex items-center rounded-md bvehicle bvehicle-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out  focus:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
                                href="#"
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

export default EditVehicle;
