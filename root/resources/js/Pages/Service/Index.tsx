import FAQ from "@/Components/FAQ";
import PackageCard from "@/Components/PackageCard";
import ServiceCard from "@/Components/ServiceCard";
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
                                answer="გააჩნია მდებარეობას, თუმცა თუ გამოძახება თბილისში მოხდება, საშუალოდ 30 წუთი დასჭრიდება."
                            />
                            <FAQ
                                question="რა სერვისებს ვთავაზობთ?"
                                answer="გთავაზობთ მანქანის ევაკუაციას, მძიმე ტექნიკის გადატანას, საწვავის მიწოდებას და სხვა."
                            />
                            <FAQ
                                question="ფასი მძღოლთან შეთანხმებით ხდება?"
                                answer="დიახ, ფასის შეთანხმება მძღოლთან ხდება"
                            />
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
