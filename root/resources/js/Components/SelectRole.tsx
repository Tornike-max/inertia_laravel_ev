import { Role } from "@/types";
import {
    forwardRef,
    SelectHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    list: Array<Role>;
    isFocused?: boolean;
}

export default forwardRef(function SelectRole(
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
            {list.map((item, i) => (
                <option key={i} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    );
});
