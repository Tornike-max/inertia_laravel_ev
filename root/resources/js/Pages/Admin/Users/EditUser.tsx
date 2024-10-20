import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectRole from "@/Components/SelectRole";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, router, useForm } from "@inertiajs/react";
import toast from "react-hot-toast";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const EditUser = ({ auth, user }: PageProps) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: user.name || "",
        email: user.email || "",
        phone_number: user.phone_number || "",
        location: user.location || "",
        role: user.role || "",
        status: user.status || "",
    });
    const handleSubmit = () => {
        put(route("admin.users.update", user.id), {
            onError: (errors) => {
                toast.error("დაფიქსირდა შეცდომა! თავიდან სცადეთ");
            },
        });
    };

    return (
        <AuthenticatedLayout header={true}>
            <Head title={`${user.name} - შესწორება`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <Link
                        className="py-1 px-2 rounded-lg font-serif border border-teal hover:bg-teal hover:text-slate-50 duration-300 transition-all ease-in-out flex items-center justify-center gap-1 w-[110px]"
                        href={route("admin.dashboard")}
                    >
                        <HiOutlineArrowLeft />
                        <span>უკან</span>
                    </Link>
                    <h3 className="text-lg font-semibold">{`${user.name}-ს შესწორება`}</h3>
                    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-md p-6">
                        <form
                            className="w-full flex flex-col gap-4 justify-center items-center"
                            onSubmit={handleSubmit}
                        >
                            <div className="w-full flex flex-col justify-center items-start">
                                <InputLabel>სახელი</InputLabel>
                                <TextInput
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError message={errors.name} />
                            </div>
                            <div className="w-full flex flex-col justify-center items-start">
                                <InputLabel>ელ-ფოსტა</InputLabel>
                                <TextInput
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <InputError message={errors.email} />
                            </div>
                            <div className="w-full flex flex-col justify-center items-start">
                                <InputLabel>ტელეფონის ნომერი</InputLabel>
                                <TextInput
                                    type="text"
                                    name="phone_number"
                                    value={data.phone_number}
                                    className="mt-1 block w-full"
                                    autoComplete="phone_number"
                                    onChange={(e) =>
                                        setData("phone_number", e.target.value)
                                    }
                                />
                                <InputError message={errors.phone_number} />
                            </div>
                            <div className="w-full flex flex-col justify-center items-start">
                                <InputLabel>ლოკაცია</InputLabel>
                                <TextInput
                                    type="text"
                                    name="location"
                                    value={data.location}
                                    className="mt-1 block w-full"
                                    autoComplete="location"
                                    onChange={(e) =>
                                        setData("location", e.target.value)
                                    }
                                />
                                <InputError message={errors.location} />
                            </div>
                            <div className="w-full flex flex-col justify-center items-start">
                                <InputLabel>
                                    როლი - მძღოლი ან მომხმარებელი
                                </InputLabel>
                                <SelectRole
                                    name="role"
                                    value={data.role}
                                    className="mt-1 block w-full"
                                    autoComplete="role"
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                    list={[
                                        {
                                            label: "მომხმარებელი",
                                            value: "customer",
                                        },
                                        {
                                            label: "ევაკუატორის მძღოლი",
                                            value: "evacuator",
                                        },
                                    ]}
                                ></SelectRole>
                                <InputError message={errors.role} />
                            </div>
                            <div className="w-full flex flex-col justify-center items-start">
                                <InputLabel>
                                    სტატუსი - ადმინი ან ედიტორი
                                </InputLabel>
                                <SelectRole
                                    name="status"
                                    value={data.status}
                                    className="mt-1 block w-full"
                                    autoComplete="status"
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    list={[
                                        {
                                            label: "ადმინი",
                                            value: "admin",
                                        },
                                        {
                                            label: "ედიტორი",
                                            value: "editor",
                                        },
                                        {
                                            label: "მომხმარებელი",
                                            value: "user",
                                        },
                                    ]}
                                ></SelectRole>
                                <InputError message={errors.status} />
                            </div>
                            <div className="w-full flex justify-end items-center gap-4">
                                <Link
                                    href={route("admin.dashboard")}
                                    className="bg-red-500 hover:bg-red-600 inline-flex items-center rounded-md border border-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out  focus:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
                                    disabled={processing}
                                >
                                    უკან დაბრუნება
                                </Link>
                                <Button
                                    type="submit"
                                    className="bg-light hover:bg-teal"
                                    disabled={processing}
                                >
                                    განახლება
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditUser;
