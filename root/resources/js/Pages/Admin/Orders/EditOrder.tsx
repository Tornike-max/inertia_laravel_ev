import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { error } from "console";

const EditOrder = ({ auth, order, user, vehicle, evacuator }: PageProps) => {
    const { errors, setData, data, put, processing } = useForm({
        pickup_location: order.pickup_location || "",
        dropoff_location: order.dropoff_location || "",
        order_details: order.order_details || "",
        order_date: order.order_date || "",
        completion_date: order.completion_date || "",
        price: order.price || "",
        status: order.status || "",
    });

    const handleSubmit = () => {
        put(route("admin.orders.update", order.id));
    };
    return (
        <AuthenticatedLayout header={true}>
            <Head title="შეკვეთების ცხრილი" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <h3 className="text-lg font-semibold">
                        შეკვეთის შესწორება
                    </h3>

                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex justify-center items-center flex-col gap-4"
                    >
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>საიდან</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.pickup_location}
                                onChange={(e) =>
                                    setData("pickup_location", e.target.value)
                                }
                            />
                            <InputError message={errors.pickup_location} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>სად</InputLabel>
                            <TextInput
                                className="w-full"
                                type="text"
                                value={data.dropoff_location}
                                onChange={(e) =>
                                    setData("dropoff_location", e.target.value)
                                }
                            />
                            <InputError message={errors.dropoff_location} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>შეკვეთის დეტალები</InputLabel>
                            <TextArea
                                className="w-full"
                                onChange={(e) =>
                                    setData("order_details", e.target.value)
                                }
                            >
                                {data.order_details}
                            </TextArea>
                            <InputError message={errors.order_details} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>შეკვეთის თარიღი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="date"
                                value={
                                    data.order_date
                                        ? new Date(data.order_date)
                                              .toISOString()
                                              .split("T")[0]
                                        : ""
                                }
                                onChange={(e) =>
                                    setData("order_date", e.target.value)
                                }
                            />
                            <InputError message={errors.order_date} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>შეკვეთის დასრულების თარიღი</InputLabel>
                            <TextInput
                                className="w-full"
                                type="date"
                                value={
                                    data.completion_date
                                        ? new Date(data.completion_date)
                                              .toISOString()
                                              .split("T")[0]
                                        : ""
                                }
                                onChange={(e) =>
                                    setData("completion_date", e.target.value)
                                }
                            />
                            <InputError message={errors.completion_date} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>ფასი</InputLabel>
                            <TextInput
                                className="w-full"
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                            />
                            <InputError message={errors.price} />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <InputLabel>სტატუსი</InputLabel>
                            <select
                                onChange={(e) =>
                                    setData(
                                        "status",
                                        e.target.value as
                                            | "pending"
                                            | "in_progress"
                                            | "completed"
                                    )
                                }
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal"
                            >
                                <option value={"pending"}>მოლოდინში</option>
                                <option value={"in_progress"}>
                                    მიმდინარეობს
                                </option>
                                <option value={"completed"}>დასრულდა</option>
                            </select>

                            <InputError message={errors.status} />
                        </div>
                        <div className="w-full flex  justify-end items-center gap-2">
                            <Link
                                className="bg-red-500 hover:bg-red-600 inline-flex items-center rounded-md border border-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out  focus:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
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

export default EditOrder;
