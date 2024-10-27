import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, errors, post, processing } = useForm({
        hasDriver: "yes",
        driver_name: "",
        truck_number: "",
        availability_status: "",
        location: "",
    });

    const handleSubmit = () => {
        post(route("evacuator.store"));
    };

    const handleReset = () => {};
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    დაამატე ევაკუატორი
                </h2>
            }
        >
            <Head title="მთავარი" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-8">
                    <div className="w-full flex justify-start items-center">
                        <Link
                            className="inline-flex items-center rounded-md border border-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-light text-white transition duration-150 ease-in-out hover:bg-teal focus:bg-teal focus:outline-none focus:ring-2 focus:ring-light focus:ring-offset-2 active:bg-teal"
                            href={route("evacuator.index")}
                        >
                            უკან დაბრუნება
                        </Link>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col justify-center items-center gap-4"
                    >
                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel>გყავთ მძღოლი?</InputLabel>
                            <select
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal "
                                onChange={(e) =>
                                    setData("hasDriver", e.target.value)
                                }
                            >
                                <option value="yes">კი</option>
                                <option value="no">არა</option>
                            </select>
                            <InputError message={errors.driver_name} />
                        </div>
                        {data.hasDriver === "yes" && (
                            <div className="w-full flex justify-center items-start flex-col gap-2">
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
                        )}

                        <div className="w-full flex justify-center items-start flex-col gap-2">
                            <InputLabel>მანქანის ნომერი</InputLabel>
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

                        <div className="w-full flex justify-center items-start flex-col gap-2">
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

                        <div className="w-full flex justify-end items-center gap-2">
                            <button
                                onClick={handleReset}
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-red-400 text-white transition duration-150 ease-in-out hover:bg-red-500 focus:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 active:bg-red-500"
                            >
                                გაუქმება
                            </button>
                            <Button
                                type="submit"
                                disabled={processing}
                                className="bg-light hover:bg-teal"
                            >
                                {processing ? "დაელოდეთ..." : "დამატება"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;