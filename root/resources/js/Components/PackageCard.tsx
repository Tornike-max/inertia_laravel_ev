import React from "react";

const PackageCard = ({
    title,
    price,
    description,
}: {
    title: string;
    price: string;
    description: string;
}) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-teal font-bold text-lg">{title}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
            <p className="mt-4 text-xl font-bold text-teal">{price}</p>
        </div>
    );
};

export default PackageCard;
