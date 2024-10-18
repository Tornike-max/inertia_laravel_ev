const Card = ({ title, count }: { title: string; count: number }) => {
    return (
        <div className="bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-3xl font-bold text-teal-500">{count}</p>
        </div>
    );
};

export default Card;
