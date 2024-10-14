import StepCard from "@/Components/StepCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { HiArrowSmallDown, HiArrowSmallUp } from "react-icons/hi2";

export default function Index({ auth, services }: PageProps) {
    const [step, setStep] = useState<number | null>(null);
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
                        <div className="p-6 space-y-4">
                            <FAQ
                                question="რამდენი ხანი სჭირდება ევაკუატორის მოსვლას?"
                                answer="ჩვენი სერვისი საშუალოდ 30 წუთში ჩამოვა თქვენთან."
                            />
                            <FAQ
                                question="რა სერვისებს ვთავაზობთ?"
                                answer="გთავაზობთ მანქანის ევაკუაციას, მძიმე ტექნიკის გადატანას, საწვავის მიწოდებას და სხვა."
                            />
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal font-bold text-2xl text-center">
                            სერვისის პაკეტები
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <PackageCard
                                title="საბაზისო პაკეტი"
                                price="50₾"
                                description="გთავაზობთ მოკლე მანძილზე გადატანას და მცირე სერვისებს."
                            />
                            <PackageCard
                                title="პრემიუმ პაკეტი"
                                price="100₾"
                                description="გთავაზობთ დიდ მანძილზე გადატანას და დამატებით სერვისებს."
                            />
                            <PackageCard
                                title="სრული პაკეტი"
                                price="150₾"
                                description="ყველა სერვისი საუკეთესო პირობებით."
                            />
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal font-bold text-2xl text-center">
                            გადაუდებელი დახმარების კონტაქტი
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

function ServiceCard({
    title,
    price,
    description,
}: {
    title: string;
    price: number;
    description: string;
}) {
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 flex flex-col justify-between h-full">
            <h3 className="text-teal font-bold text-xl hover:text-teal-800 transition-colors">
                {title}
            </h3>
            <p className="mt-3 text-teal text-sm">{description}</p>
            <div className="w-full flex justify-between items-center border-t pt-4 text-sm mt-2">
                <p className="text-gray-600 font-semibold">
                    სერვისის ღირებულება: {price} ₾
                </p>
                <button className="bg-teal-600 text-teal hover:underline px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
                    არჩევა
                </button>
            </div>
        </div>
    );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-teal font-bold text-lg">{question}</h3>
            <p className="mt-2 text-gray-700">{answer}</p>
        </div>
    );
}

function PackageCard({
    title,
    price,
    description,
}: {
    title: string;
    price: string;
    description: string;
}) {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-teal font-bold text-lg">{title}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
            <p className="mt-4 text-xl font-bold text-teal">{price}</p>
        </div>
    );
}
