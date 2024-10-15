import { useForm } from "@inertiajs/react";
import React, { FormEventHandler } from "react";
import Button from "./Button";
import toast from "react-hot-toast";

const SendQuestion = () => {
    const { data, setData, post, processing, errors, reset, get } = useForm({
        question: "",
        category: "",
    });

    const submit: FormEventHandler = (e: React.ChangeEvent) => {
        e.preventDefault();

        post(route("question.send"), {
            onFinish: () => {
                reset("question", "category");
                toast.success("კითხვა წარმატებით გაიგზავნა. მადლობა🎉");
            },
            onError: () => {
                toast.error(
                    "სამწუხაროდ თქვენი შეკითხვა ვერ გაიგზავნა. თავიდან სცადეთ😥"
                );
            },
        });
    };
    return (
        <form
            onSubmit={(e) => submit(e)}
            className="overflow-hidden bg-white shadow-sm sm:rounded-lg"
        >
            <div className="p-6 text-teal font-bold text-2xl text-center">
                დაგვისვი კითხვა
            </div>

            <div className="w-full p-6">
                <select
                    onChange={(e) => setData("category", e.target.value)}
                    className={`w-full py-2 px-3 ${
                        errors.category
                            ? "border-red-500 bg-red-500 "
                            : "border-gray-300 bg-teal "
                    } cursor-pointer text-center text-slate-100 border  rounded-md shadow-sm transition duration-200 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                >
                    <option value="">აირჩიე კატეგორია</option>
                    <option value="services">სერვისი</option>
                    <option value="payments">გადახდები</option>
                    <option value="techs">ტექნიკური დახმარება</option>
                    <option value="security">უსაფრთხოება</option>
                </select>
                {errors.category && (
                    <span className="text-red-500 text-sm mt-2">
                        {errors.category}
                    </span>
                )}
            </div>
            <div className="p-6 space-y-4">
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                        წერილი
                    </label>
                    <textarea
                        value={data.question}
                        onChange={(e) => setData("question", e.target.value)}
                        className={`mt-1 block w-full border ${
                            errors.question
                                ? "border-red-500"
                                : "border-gray-300"
                        } rounded-md p-2`}
                        rows={4}
                    />
                    {errors.question && (
                        <span className="text-red-500 text-sm mt-2">
                            {errors.question}
                        </span>
                    )}
                    <div className="w-full flex justify-end items-center mt-3">
                        <Button
                            disabled={processing}
                            className="bg-light hover:bg-teal"
                        >
                            გაგზავნა
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SendQuestion;
