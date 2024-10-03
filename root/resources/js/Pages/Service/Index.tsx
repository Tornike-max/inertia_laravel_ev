import OrderForm from "@/Components/OrderForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({ auth }: PageProps) {
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
                            <ServiceCard
                                title="მანქანის ევაკუატორი"
                                description="სწრაფი და უსაფრთხო მანქანის ევაკუატორი, ნებისმიერი ზომის მანქანის გადაადგილებისთვის."
                            />
                            <ServiceCard
                                title="მოტოციკლეტის ევაკუატორი"
                                description="მოტოციკლეტის უსაფრთხო ტრანსპორტირება დაზიანების გარეშე."
                            />
                            <ServiceCard
                                title="მძიმე ტექნიკის ევაკუაცია"
                                description="დიდი ზომის და მძიმე ტექნიკის ევაკუაცია სპეციალური აღჭურვილობით."
                            />
                            <ServiceCard
                                title="მანძილზე ტრანსპორტირება"
                                description="მანძილზე მანქანის უსაფრთხო გადატანა საქართველოს ნებისმიერ ქალაქში."
                            />
                            <ServiceCard
                                title="დაფიქსირებული ბორბლები"
                                description="გთავაზობთ სწრაფ და პროფესიონალურ მომსახურებას ბორბლების დაფიქსირებისთვის."
                            />
                            <ServiceCard
                                title="საწვავის მიწოდება"
                                description="საწვავის მიწოდების სერვისი მანქანის გაჩერების შემთხვევისას."
                            />
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal font-bold text-2xl text-center">
                            როგორ მუშაობს
                        </div>
                        <div className="p-6 space-y-4">
                            <StepCard step="1" description="აირჩიეთ სერვისი" />
                            <StepCard
                                step="2"
                                description="შეიყვანეთ ავტომობილის მონაცემები"
                            />
                            <StepCard
                                step="3"
                                description="მონიშნეთ პიკაპისა და ჩამოსვლის ლოკაცია"
                            />
                            <StepCard
                                step="4"
                                description="დაადასტურეთ და მიიღეთ ევაკუატორი"
                            />
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
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-teal font-bold text-lg">{title}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
        </div>
    );
}

function StepCard({
    step,
    description,
}: {
    step: string;
    description: string;
}) {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-teal font-bold text-lg">ნაბიჯი {step}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
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
