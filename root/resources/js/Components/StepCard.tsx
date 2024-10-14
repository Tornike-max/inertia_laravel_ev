import React from "react";
import { HiArrowSmallDown, HiArrowSmallUp } from "react-icons/hi2";

const StepCard = ({
    step,
    setStep,
}: {
    step: number | null;
    setStep: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
    return (
        <div className="w-full flex justify-center items-center flex-col gap-4">
            {Array.from({ length: 4 }, (_, index) => {
                const stepNumber = index + 1;
                return (
                    <div
                        key={stepNumber}
                        onClick={() =>
                            setStep(step === stepNumber ? null : stepNumber)
                        }
                        className={`w-full flex flex-col bg-slate-50 border rounded-lg shadow-md cursor-pointer transform transition-all duration-300 ease-in-out ${
                            step === stepNumber ? "border-teal" : "border-light"
                        } hover:shadow-lg`}
                    >
                        <div className="flex justify-between items-center p-4">
                            <h3 className="text-teal font-bold text-lg">
                                ნაბიჯი {stepNumber}
                            </h3>
                            <button>
                                {step === stepNumber ? (
                                    <HiArrowSmallDown className="text-2xl" />
                                ) : (
                                    <HiArrowSmallUp className="text-2xl" />
                                )}
                            </button>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                step === stepNumber
                                    ? "max-h-screen opacity-100"
                                    : "max-h-0 opacity-0"
                            }`}
                        >
                            <div className="p-4 border-t border-teal text-teal">
                                {stepNumber === 1 &&
                                    "შეიყვანეთ ავტომობილის მონაცემები"}
                                {stepNumber === 2 &&
                                    "შეიყვანეთ ავტომობილის მონაცემები"}
                                {stepNumber === 3 &&
                                    "მონიშნეთ პიკაპისა და ჩამოსვლის ლოკაცია"}
                                {stepNumber === 4 &&
                                    "დაადასტურეთ და მიიღეთ ევაკუატორი"}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StepCard;
