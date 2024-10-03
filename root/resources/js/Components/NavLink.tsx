import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-light text-teal focus:border-teal"
                    : "border-transparent text-light hover:border-teal hover:text-teal focus:border-teal focus:text-teal") +
                className
            }
        >
            {children}
        </Link>
    );
}
