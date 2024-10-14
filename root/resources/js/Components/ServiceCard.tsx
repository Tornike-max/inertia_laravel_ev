import React from "react";

const ServiceCard = ({
    title,
    price,
    description,
}: {
    title: string;
    price: number;
    description: string;
}) => {
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
};

export default ServiceCard;
