import Button from "@/Components/Button";
import FAQ from "@/Components/FAQ";
import PackageCard from "@/Components/PackageCard";
import ServiceCard from "@/Components/ServiceCard";
import StepCard from "@/Components/StepCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, router, useForm } from "@inertiajs/react";
import { FormEvent, FormEventHandler, useState } from "react";

export default function Index({ auth, services, questions }: PageProps) {
    const [step, setStep] = useState<number | null>(null);
    const { data, setData, post, processing, errors, reset, get } = useForm({
        question: "",
    });
    const [category, setCategory] = useState("");

    const submit: FormEventHandler = (e: React.ChangeEvent) => {
        e.preventDefault();

        post(route("question.send"), {
            onFinish: () => reset("question"),
        });
    };

    let filteredData;

    switch (category) {
        case "services":
            filteredData = questions.services;
            break;
        case "payments":
            filteredData = questions.payments;
            break;
        case "techs":
            filteredData = questions.techs;
            break;
        case "security":
            filteredData = questions.security;
            break;
        case "prices":
            filteredData = questions.prices;
            break;

        default:
            filteredData = questions.services;
            break;
    }

    console.log(filteredData);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    სერვისები
                </h2>
            }
        >
            <Head title="სერვისები" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal font-bold text-2xl text-center">
                            სერვისები
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                            {services?.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    title={service.name}
                                    price={Number(service.price)}
                                    description={service.description}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal font-bold text-2xl text-center">
                            როგორ გამოვიძახოთ ევაკუატორი?
                        </div>
                        <div className="p-6 space-y-4">
                            <StepCard step={step ?? null} setStep={setStep} />
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal font-bold text-2xl text-center">
                            ხშირად დასმული კითხვები
                        </div>
                        {/* ღილაკების სექცია */}
                        <div className="w-full p-6">
                            <select
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full py-2 px-3 bg-teal cursor-pointer text-center text-slate-100 border border-gray-300 rounded-md shadow-sm transition duration-200 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            >
                                <option value="services">სერვისი</option>
                                <option value="payments">გადახდები</option>
                                <option value="techs">
                                    ტექნიკური დახმარება
                                </option>
                                <option value="security">უსაფრთხოება</option>
                            </select>
                        </div>
                        {/* კითხვების სექცია */}
                        <div className="p-6 space-y-4">
                            {filteredData.map((question) => (
                                <FAQ
                                    key={question.id}
                                    question={question.question}
                                    answer={question.answer}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal font-bold text-2xl text-center">
                            დაგვისვი კითხვა
                        </div>
                        <div className="p-6 space-y-4">
                            <form
                                onSubmit={(e) => submit(e)}
                                className="col-span-1 md:col-span-2"
                            >
                                <label className="block text-sm font-medium text-gray-700">
                                    წერილი
                                </label>
                                <textarea
                                    value={data.question}
                                    onChange={(e) =>
                                        setData("question", e.target.value)
                                    }
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
                            </form>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal font-bold text-2xl text-center">
                            გადაუდებელი დახმარება
                        </div>
                        <div className="p-6 text-center">
                            <p className="text-lg">
                                ტელეფონი: +995 599 123 456
                            </p>
                            <p className="text-lg">ელფოსტა: info@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
