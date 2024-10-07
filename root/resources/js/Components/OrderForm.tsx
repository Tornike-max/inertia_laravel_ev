import { useForm } from "@inertiajs/react";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import SecondaryButton from "./SecondaryButton";
import { error } from "console";

const OrderForm = ({
    handleToggleModal,
}: {
    handleToggleModal: () => void;
}) => {
    const { data, post, setData, errors, processing } = useForm({
        pickup_location: "",
        dropoff_location: "",
        model: "",
        order_details: "",
        make: "",
        year: "",
        kg: "",
        color: "",
        license_plate: "",
        error: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("order"));
    };

    return (
        <form onSubmit={submit}>
            {errors.error && <InputError message={errors.error} />}

            <div className="w-full grid grid-cols-2 gap-4">
                <div className="w-full">
                    <InputLabel htmlFor="pickup_location" value="საიდან *" />
                    <TextInput
                        id="pickup_location"
                        type="text"
                        name="pickup_location"
                        value={data.pickup_location}
                        className="mt-1 block w-full"
                        autoComplete="pickup_location"
                        isFocused={true}
                        onChange={(e) =>
                            setData("pickup_location", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.pickup_location}
                        className="mt-2"
                    />
                </div>

                <div className="w-full">
                    <InputLabel htmlFor="dropoff_location" value="სად *" />
                    <TextInput
                        id="dropoff_location"
                        type="text"
                        name="dropoff_location"
                        value={data.dropoff_location}
                        className="mt-1 block w-full"
                        autoComplete="current-dropoff_location"
                        onChange={(e) =>
                            setData("dropoff_location", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.dropoff_location}
                        className="mt-2"
                    />
                </div>

                <div className="w-full">
                    <InputLabel htmlFor="make" value="მანქანის მწარმოებელი *" />
                    <TextInput
                        id="make"
                        type="text"
                        name="make"
                        value={data.make}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("make", e.target.value)}
                    />
                    <InputError message={errors.make} className="mt-2" />
                </div>

                <div className="w-full">
                    <InputLabel htmlFor="model" value="მანქანის მოდელი *" />
                    <TextInput
                        id="model"
                        type="text"
                        name="model"
                        value={data.model}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("model", e.target.value)}
                    />
                    <InputError message={errors.model} className="mt-2" />
                </div>

                <div className="w-full">
                    <InputLabel htmlFor="year" value="გამოშვების წელი *" />
                    <TextInput
                        id="year"
                        type="text"
                        name="year"
                        value={data.year}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("year", e.target.value)}
                    />
                    <InputError message={errors.year} className="mt-2" />
                </div>

                <div className="w-full">
                    <InputLabel htmlFor="kg" value="მანქანის წონა *" />
                    <TextInput
                        id="kg"
                        type="text"
                        placeholder="კილოგრამებში"
                        name="kg"
                        value={data.kg}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("kg", e.target.value)}
                    />
                    <InputError message={errors.kg} className="mt-2" />
                </div>

                <div className="w-full">
                    <InputLabel htmlFor="color" value="მანქანის ფერი" />
                    <TextInput
                        id="color"
                        type="text"
                        name="color"
                        value={data.color}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("color", e.target.value)}
                    />
                    <InputError message={errors.color} className="mt-2" />
                </div>

                <div className="w-full">
                    <InputLabel
                        htmlFor="license_plate"
                        value="მანქანის ნომერი *"
                    />
                    <TextInput
                        id="license_plate"
                        type="text"
                        name="license_plate"
                        value={data.license_plate}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("license_plate", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.license_plate}
                        className="mt-2"
                    />
                </div>

                <div className="w-full col-span-2">
                    <InputLabel
                        htmlFor="order_details"
                        value="შეკვეთის დეტალები"
                    />
                    <TextInput
                        id="order_details"
                        name="order_details"
                        value={data.order_details}
                        className="mt-1 text-start w-full h-32"
                        onChange={(e) =>
                            setData("order_details", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.order_details}
                        className="mt-2"
                    />
                </div>
            </div>

            <div className="mt-4 w-full flex items-center justify-center gap-4">
                <SecondaryButton
                    type="button"
                    onClick={() => handleToggleModal()}
                    className="w-full flex justify-center items-center hover:bg-red-500 hover:text-white"
                >
                    გამოსვლა
                </SecondaryButton>
                <PrimaryButton
                    type="submit"
                    className="w-full flex justify-center items-center  hover:bg-teal"
                    disabled={processing}
                >
                    {processing ? "Loading..." : "გამოძახება"}
                </PrimaryButton>
            </div>
        </form>
    );
};

export default OrderForm;
