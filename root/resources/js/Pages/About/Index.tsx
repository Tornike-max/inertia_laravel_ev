import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    ჩვენი კომპანია
                </h2>
            }
        >
            <Head title="ჩვენი შესახებ" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal text-center font-bold text-2xl">
                            ჩვენი მისია
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <p className="text-gray-700 text-lg">
                                ჩვენი კომპანია ეწევა სატრანსპორტო სერვისების
                                მიწოდებას, რომელიც უზრუნველყოფს მომხმარებელს
                                სწრაფი და საიმედო მომსახურებით. ჩვენი მიზანია,
                                თითოეული კლიენტის საჭიროებები გავამართლოთ და
                                შევქმნათ უნიკალური გამოცდილება.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal text-center font-bold text-2xl">
                            რატომ ჩვენ?
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>• გამოცდილი პროფესიონალების გუნდი</li>
                                <li>• მომხმარებელზე ორიენტირებული სერვისები</li>
                                <li>• მაღალი ხარისხის და უსაფრთხოება</li>
                                <li>• 24/7 მხარდაჭერა</li>
                            </ul>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-teal text-center font-bold text-2xl">
                            ჩვენი ისტორია
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <p className="text-gray-700 text-lg">
                                ჩვენი კომპანია დაარსდა გუშინ, და დღემდე
                                გრძელდება მუდმივი განვითარება. ჩვენ ვცდილობთ,
                                რომ გავაუმჯობესოთ ჩვენი მომსახურება და დავნერგოთ
                                სიახლეები ბაზარზე.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
