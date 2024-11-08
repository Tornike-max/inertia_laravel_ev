import LiveMap from "@/Components/LiveMap";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const CurrentOrder = ({ auth, currentOrder }: PageProps) => {
    console.log(currentOrder);
    return (
        <AuthenticatedLayout
            currentOrder={currentOrder}
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    თქვენი შეკვეთა
                </h2>
            }
        >
            <Head title="შეკვეთა" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-12">
                    <div className="bg-white shadow-sm rounded-lg p-6">
                        <h3 className="text-lg font-semibold">
                            შეკვეთის დეტალები
                        </h3>
                        <p>
                            <strong>Pickup ლოკაცია:</strong>{" "}
                            {currentOrder?.pickup_location}
                        </p>
                        <p>
                            <strong>Dropoff ლოკაცია:</strong>{" "}
                            {currentOrder?.dropoff_location}
                        </p>
                        <p>
                            <strong>სტატუსი:</strong> {currentOrder?.status}
                        </p>
                        <p>
                            <strong>ფასი:</strong> {currentOrder?.price}₾
                        </p>
                        <p>
                            <strong>შეკვეთის თარიღი:</strong>{" "}
                            {currentOrder?.order_date}
                        </p>
                        <p>
                            <strong>მიმდინარე მანქანა:</strong>{" "}
                            {currentOrder?.tow_truck_id}
                        </p>
                    </div>

                    <LiveMap
                        towTruckId={currentOrder?.towTruck?.id ?? 0}
                        evacuator={currentOrder?.towTruck}
                    />

                    <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                        {currentOrder?.status === "In Progress" && (
                            <button className="w-full py-3 bg-yellow-600 text-white rounded-md">
                                გამარჯობა, ევაკუატორი გზაშია!
                            </button>
                        )}
                        {currentOrder?.status === "completed" && (
                            <button className="w-full py-3 bg-green-600 text-white rounded-md">
                                შეკვეთა დასრულებულია
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CurrentOrder;
