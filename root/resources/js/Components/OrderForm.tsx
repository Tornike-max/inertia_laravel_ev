import { useForm } from "@inertiajs/react";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";

const OrderForm = () => {
    const { data, post, setData, errors, processing } = useForm({
        evacuator: "",
        password: "",
        remember: false,
    });

    const submit = () => {
        console.log(data);
    };
    return (
        <form onSubmit={submit}>
            <div>
                <InputLabel htmlFor="evacuator" value="evacuator" />

                <TextInput
                    id="evacuator"
                    type="text"
                    name="evacuator"
                    value={data.evacuator}
                    className="mt-1 block w-full"
                    autoComplete="evacuator"
                    isFocused={true}
                    onChange={(e) => setData("evacuator", e.target.value)}
                />

                <InputError message={errors.evacuator} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="current-password"
                    onChange={(e) => setData("password", e.target.value)}
                />

                <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4 flex items-center justify-end">
                <PrimaryButton className="ms-4" disabled={processing}>
                    Log in
                </PrimaryButton>
            </div>
        </form>
    );
};

export default OrderForm;
