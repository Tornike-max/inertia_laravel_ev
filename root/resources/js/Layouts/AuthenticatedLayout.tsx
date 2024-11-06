import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Order } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";

export default function Authenticated({
    header,
    currentOrder,
    children,
}: PropsWithChildren<{
    header?: ReactNode;
    currentOrder?: Order | undefined;
}>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const currentPath = window.location.href.includes("admin");

    console.log(
        currentOrder &&
            currentOrder.status !== "completed" &&
            currentOrder.user_id === user.id &&
            currentOrder
    );
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    მთავარი
                                </NavLink>
                                <NavLink
                                    href={route("evacuator.index")}
                                    active={route().current("evacuator.index")}
                                >
                                    ევაკუატორები
                                </NavLink>
                                <NavLink
                                    href={route("services.index")}
                                    active={route().current("services.index")}
                                >
                                    სერვისები
                                </NavLink>
                                <NavLink
                                    href={route("about.index")}
                                    active={route().current("about.index")}
                                >
                                    ჩვენ შესახებ
                                </NavLink>
                                <NavLink
                                    href={route("contact.index")}
                                    active={route().current("contact.index")}
                                >
                                    კონტაქტი
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            {user.status === "admin" && (
                                <div className="space-x-8 h-16 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href={route("admin.dashboard")}
                                        active={route().current(
                                            "admin.dashboard"
                                        )}
                                    >
                                        ადმინ პანელი
                                    </NavLink>
                                </div>
                            )}

                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-light transition duration-150 ease-in-out hover:text-teal focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            მთავარი
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("services.index")}
                            active={route().current("services.index")}
                        >
                            სერვისები
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("about.index")}
                            active={route().current("about.index")}
                        >
                            ჩვენ შესახებ
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("contact.index")}
                            active={route().current("contact.index")}
                        >
                            კონტაქტი
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {currentOrder &&
                currentOrder.status !== "completed" &&
                currentOrder.user_id === user.id && (
                    <div className="fixed bottom-4 right-4 z-50">
                        <NavLink
                            href={route("order.current", currentOrder.id)}
                            active={false}
                            className="text-white bg-blue-700 hover:bg-blue-800 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-lg p-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl"
                        >
                            <span className="text-xl animate-bounce">🛻</span>
                        </NavLink>
                    </div>
                )}

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {currentPath ? (
                            <div className="w-full flex justify-start items-center gap-8">
                                <h2 className="text-xl font-semibold leading-tight text-teal">
                                    ადმინ პანელი
                                </h2>
                                <div className="flex justify-start items-center gap-4 md:gap-6 lg:gap-8">
                                    <NavLink
                                        href={route("admin.dashboard")}
                                        active={route().current(
                                            "admin.dashboard"
                                        )}
                                    >
                                        მთავარი
                                    </NavLink>
                                    <NavLink
                                        href={route("admin.users")}
                                        active={route().current("admin.users")}
                                    >
                                        მომხმარებლები
                                    </NavLink>
                                    <NavLink
                                        href={route("admin.orders")}
                                        active={route().current("admin.orders")}
                                    >
                                        შეკვეთები
                                    </NavLink>
                                    <NavLink
                                        href={route("admin.vehicles")}
                                        active={route().current(
                                            "admin.vehicles"
                                        )}
                                    >
                                        მანქანები
                                    </NavLink>
                                    <NavLink
                                        href={route("admin.evacuators")}
                                        active={route().current(
                                            "admin.evacuators"
                                        )}
                                    >
                                        ევაკუატორები
                                    </NavLink>
                                </div>
                            </div>
                        ) : (
                            header
                        )}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
