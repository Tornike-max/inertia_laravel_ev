export interface User {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    role: string;
    email_verified_at?: string;
    status: string;
    updated_at: string;
    created_at: string;
    location: string;
}

export interface Service {
    id: number;
    name: string;
    description: string;
    price: string;
}

export interface Role {
    label: string;
    value: string;
}

export interface Feedbacks {
    id: number;
    author_id: number;
    author: User;
    content: string;
}

export interface About {
    title: string;
    ourMission: string;
    whyUs: string;
    ourHistory: string;
}

interface FAQ {
    id: number;
    user_id: number;
    user: User;
    question: string;
    answer: string;
    category: string;
}

interface FAQsByCategory {
    payments: FAQ[];
    prices: FAQ[];
    security: FAQ[];
    services: FAQ[];
    techs: FAQ[];
}

interface Pagination<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{ url: string | null; label: string; active: boolean }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface Order {
    id: number;
    user_id: number;
    vehicle_id: number;
    tow_truck_id: number;
    order_date: string;
    completion_date: string;
    pickup_location: string;
    dropoff_location: string;
    price: number;
    status: "pending" | "in_progress" | "completed";
    order_details: string;
    created_at: string;
    updated_at: string;
    user: User;
}

export interface Vehicle {
    id: number;
    user_id: number;
    make: string;
    model: string;
    year: string;
    kg: string;
    license_plate: string;
    color: string;
    created_at: string;
    updated_at: string;
}

interface TowTruck {
    id: number;
    truck_number: string;
    driver_name: string;
    location: string;
    availability_status: string;
    created_at: string;
    updated_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    services?: Service[];
    feedbacks?: Feedbacks[];
    ourMission?: {
        ourMission: string;
    };
    about?: About;
    questions?: FAQsByCategory;
    question?: FAQ;
    user: User;
    order: Order;
    vehicle?: Vehicle;
    evacuator?: TowTruck;
    usersCount?: number;
    evacuatorsCount?: number;
    ordersCount?: number;
    vehiclesCount?: number;
    payment_secret_key?: string;
};
