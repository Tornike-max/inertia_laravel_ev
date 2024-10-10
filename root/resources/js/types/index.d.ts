export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
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

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    services: Service[];
    feedbacks: Feedbacks[];
};
