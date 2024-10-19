import {
    forwardRef,
    InputHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

export default forwardRef(function TextArea(
    {
        type = "text",
        className = "",
        isFocused = false,
        children = "",
        ...props
    }: InputHTMLAttributes<HTMLTextAreaElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <textarea
            {...props}
            className={
                "rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal " +
                className
            }
            ref={localRef}
            children={children}
        ></textarea>
    );
});
