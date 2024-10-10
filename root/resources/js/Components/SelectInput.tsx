import { Service } from "@/types";
import {
    forwardRef,
    InputHTMLAttributes,
    SelectHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    list: Array<Service>;
    isFocused?: boolean;
}

export default forwardRef(function SelectInput(
    {
        className = "",
        list = [],
        isFocused = false,
        ...props
    }: SelectInputProps,
    ref
) {
    const localRef = useRef<HTMLSelectElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <select
            {...props}
            className={
                "rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal " +
                className
            }
            ref={localRef}
        >
            {list.map((item) => (
                <option key={item.name} value={item.name}>
                    {item.name}-{item.price} ლარი
                </option>
            ))}
        </select>
    );
});
