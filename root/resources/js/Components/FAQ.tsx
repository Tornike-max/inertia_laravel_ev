import React from "react";

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-teal font-bold text-lg">{question}</h3>
            <p className="mt-2 text-gray-700">{answer}</p>
        </div>
    );
};

export default FAQ;
