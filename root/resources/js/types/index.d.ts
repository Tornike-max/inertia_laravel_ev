export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    status: string;
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
};
