import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

export default function Index({ auth, currentOrder }: PageProps) {
    const { data, setData, processing, errors, post } = useForm({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = () => {
        post(
            route("contact.send", {
                onSuccess: () => {
                    toast.success("წერილი წარმატებით გაიგზავნა");
                },
                onError: () => {
                    toast.error("სამწუხაროდ წერილის გაგზავნა ვერ მოხერხდა");
                },
            })
        );
    };

    return (
        <AuthenticatedLayout
            currentOrder={currentOrder}
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    კონტაქტი
                </h2>
            }
        >
            <Head title="კონტაქტი" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal text-center font-bold text-2xl">
                            ჩვენი სერვისი
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-8 text-gray-700">
                            <h3 className="text-2xl font-semibold text-teal mb-4 text-center">
                                ნებისმიერი კითხვის შემთხვევაში დაგვიკავშირდით!
                            </h3>
                            <p className="mb-4 text-center">
                                თუ თქვენ გაქვთ კითხვები ან საჭიროებთ დახმარებას,
                                გთხოვთ დაგვიკავშირდეთ.
                            </p>
                            <p className="mb-4 text-center">
                                მოგვწერეთ და ჩვენ მალე დაგიკავშირდებით!
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <InputLabel>სახელი</InputLabel>
                                        <TextInput
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className={`mt-1 block w-full border ${
                                                errors.name
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            } rounded-md p-2`}
                                        />
                                        <InputError message={errors.name} />
                                    </div>
                                    <div>
                                        <InputLabel>
                                            ელექტრონული ფოსტა
                                        </InputLabel>
                                        <TextInput
                                            value={data.email}
                                            type="email"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className={`mt-1 block w-full border ${
                                                errors.email
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            } rounded-md p-2`}
                                        />
                                        <InputError message={errors.email} />
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <InputLabel>წერილი</InputLabel>
                                        <textarea
                                            value={data.message}
                                            onChange={(e) =>
                                                setData(
                                                    "message",
                                                    e.target.value
                                                )
                                            }
                                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal ${
                                                errors.message
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            } rounded-md p-2`}
                                            rows={4}
                                        />
                                        <InputError message={errors.message} />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-light hover:bg-teal focus:bg-teal flex justify-center items-center"
                                    >
                                        {processing
                                            ? "იგზავნება..."
                                            : "გაგზავნა"}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal text-center font-bold text-2xl">
                            საკონტაქტო ინფორმაცია
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-700">
                            <p>ტელეფონი: +995 123 456 789</p>
                            <p>ელ.ფოსტა: contact@yourcompany.com</p>
                            <p>მისამართი: თბილისი, საქართველო</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
