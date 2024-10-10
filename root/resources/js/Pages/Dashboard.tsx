import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Feedbacks, PageProps, Service } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";
import CreateOrderModal from "@/Components/CreateOrderModal";

export default function Dashboard({ auth, services }: PageProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { feedbacks } = usePage().props;

    const handleToggleModal = () => {
        setIsModalOpen((open) => !open);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    მთავარი გვერდი
                </h2>
            }
        >
            <Head title="მთავარი" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-12">
                    <section
                        className="relative bg-teal-500 text-teal py-20 text-center bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/background.jpg')" }}
                    >
                        <div className="bg-teal-500/60 absolute inset-0"></div>
                        <div className="relative z-10">
                            <h1 className="text-4xl font-bold">
                                სწრაფი და საიმედო სერვისები
                            </h1>
                            <p className="mt-4 text-lg">
                                მიიღეთ საუკეთესო სერვისი საქართველოს ნებისმიერ
                                წერტილში
                            </p>
                            <button
                                onClick={() => setIsModalOpen(true)} // Open modal
                                className="mt-8 inline-block bg-white/50 text-teal font-bold py-2 px-6 rounded-lg hover:bg-white/90 transition-colors duration-300"
                            >
                                ევაკუატორის გამოძახება
                            </button>
                        </div>
                    </section>
                    {isModalOpen && (
                        <CreateOrderModal
                            handleToggleModal={handleToggleModal}
                            services={services}
                        />
                    )}
                    <section className="p-6 bg-white shadow-sm rounded-lg">
                        <h2 className="text-2xl font-bold text-teal text-center">
                            ჩვენ შესახებ
                        </h2>
                        <p className="mt-4 text-gray-700 text-center">
                            ჩვენ გთავაზობთ მაღალხარისხიან და სწრაფ ევაკუატორის
                            სერვისს. ჩვენი გუნდი მუდამ მზადაა დაგეხმაროთ
                            საჭიროების დროს.
                        </p>
                    </section>

                    <section className="p-6 bg-gray-100 shadow-sm rounded-lg">
                        <h2 className="text-2xl font-bold text-teal text-center">
                            ძირითადი სერვისები
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {services?.map((service: Service) => (
                                <ServiceCard
                                    key={service.id}
                                    title={service.name}
                                    description={service.description}
                                    link="/services"
                                />
                            ))}
                        </div>
                    </section>

                    <section className="p-6 bg-white shadow-sm rounded-lg">
                        <h2 className="text-2xl font-bold text-teal text-center">
                            რატომ ჩვენ?
                        </h2>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <WhyUsCard
                                title="სწრაფი რეაგირება"
                                description="ჩვენი გუნდი ყოველთვის მზად არის დაეხმაროთ საჭიროების დროს."
                            />
                            <WhyUsCard
                                title="24/7 მხარდაჭერა"
                                description="ჩვენი სერვისი ხელმისაწვდომია ნებისმიერ დროს, დღე თუ ღამე."
                            />
                            <WhyUsCard
                                title="პროფესიონალი გუნდი"
                                description="პროფესიონალები მზად არიან ნებისმიერი სირთულის გადაჭრაში."
                            />
                            <WhyUsCard
                                title="საუკეთესო აღჭურვილობა"
                                description="ჩვენ ვიყენებთ საუკეთესო და უსაფრთხო ტექნიკას."
                            />
                        </div>
                    </section>

                    <section className="p-6 bg-gray-100 shadow-sm rounded-lg">
                        <h2 className="text-2xl font-bold text-teal text-center">
                            კლიენტების შეფასებები
                        </h2>
                        <div className="mt-6 space-y-6">
                            {feedbacks.map((feedback: Feedbacks) => (
                                <Testimonial
                                    key={feedback.id}
                                    name={feedback.author.name}
                                    feedback={feedback.content}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="p-6 bg-white shadow-sm rounded-lg">
                        <h2 className="text-2xl font-bold text-teal text-center">
                            გადაუდებელი დახმარების კონტაქტი
                        </h2>
                        <div className="mt-4 text-center">
                            <p className="text-lg">
                                ტელეფონი: +995 599 123 456
                            </p>
                            <p className="text-lg">ელფოსტა: info@example.com</p>
                        </div>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function ServiceCard({
    title,
    description,
    link,
}: {
    title: string;
    description: string;
    link: string;
}) {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-teal font-bold text-lg">{title}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
            <a
                href={link}
                className="mt-4 inline-block text-teal-500 font-semibold hover:underline"
            >
                მეტი დეტალი
            </a>
        </div>
    );
}

function WhyUsCard({
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

function Testimonial({ name, feedback }: { name: string; feedback: string }) {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <p className="text-gray-700">"{feedback}"</p>
            <p className="mt-2 text-teal font-bold">- {name}</p>
        </div>
    );
}
