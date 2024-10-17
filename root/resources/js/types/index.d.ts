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
    about: About;
    questions: FAQsByCategory;
    question: FAQ;
    user: User;
};
