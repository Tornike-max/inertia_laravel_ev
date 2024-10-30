import { showImage } from "@/functions/helpers";
import { TowTruck } from "@/types";
import { Link } from "@inertiajs/react";
import { GrStatusGood } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi2";
import { IoNavigateCircleOutline } from "react-icons/io5";
import Button from "./Button";

const TowTruckCard = ({ evacuator }: { evacuator: TowTruck }) => {
    return (
        <div
            key={evacuator.id}
            className="p-4 bg-white shadow rounded-lg hover:shadow-2xl duration-200 transition-all flex flex-col"
        >
            <Link href={route("evacuator.show", evacuator.id)}>
                <img
                    src={showImage(evacuator.image)}
                    alt={evacuator?.driver_phone}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <HiOutlineUser />
                        {evacuator.driver_name}
                    </h3>
                    <p className="mt-1 text-gray-600 flex items-center gap-2">
                        <IoNavigateCircleOutline />
                        {evacuator.location}
                    </p>
                    <p
                        className={`mt-1 text-sm flex items-center gap-2 ${
                            evacuator.availability_status === "ხელმისაწვდომი"
                                ? "text-green-600"
                                : "text-red-600"
                        }`}
                    >
                        <GrStatusGood />
                        {evacuator.availability_status === "ხელმისაწვდომი"
                            ? "ხელმისაწვდომია"
                            : "დაკავებულია"}
                    </p>
                </div>
            </Link>
            <div className="w-full flex justify-center items-center flex-col">
                <Link
                    href={route("evacuator.orderform", evacuator.id)}
                    className="w-full  justify-center items-center inline-flex  rounded-md border border-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out bg-light hover:bg-teal focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:bg-green-500 "
                >
                    გამოძახება
                </Link>
            </div>
        </div>
    );
};

export default TowTruckCard;
