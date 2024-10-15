import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { useForm } from "react-hook-form";

export default function Index({ auth }: PageProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <AuthenticatedLayout
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            სახელი
                                        </label>
                                        <input
                                            type="text"
                                            {...register("name", {
                                                required: true,
                                            })}
                                            className={`mt-1 block w-full border ${
                                                errors.name
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            } rounded-md p-2`}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-xs mt-1">
                                                სახელი აუცილებელია
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            ელ.ფოსტა
                                        </label>
                                        <input
                                            type="email"
                                            {...register("email", {
                                                required: true,
                                            })}
                                            className={`mt-1 block w-full border ${
                                                errors.email
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            } rounded-md p-2`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">
                                                ელ.ფოსტა აუცილებელია
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            წერილი
                                        </label>
                                        <textarea
                                            {...register("message", {
                                                required: true,
                                            })}
                                            className={`mt-1 block w-full border ${
                                                errors.message
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            } rounded-md p-2`}
                                            rows={4}
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 text-xs mt-1">
                                                წერილი აუცილებელია
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-teal-500 text-white font-bold py-2 rounded-lg hover:bg-teal-600 transition duration-300"
                                    >
                                        გაგზავნა
                                    </button>
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
