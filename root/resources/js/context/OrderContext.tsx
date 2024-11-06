import { Order } from "@/types";
import React, { createContext, useState, ReactNode, useEffect } from "react";

type OrderContextType = {
    order: Order | null;
    setOrder: React.Dispatch<React.SetStateAction<Order | null>>;
};

// defaultValues ცვლადი უნდა იყოს ტიპის `Order` -ს შესაბამისი
const defaultValues: Order = {
    user_id: 0,
    tow_truck_id: 0,
    vehicle_id: 0,
    pickup_location: "",
    dropoff_location: "",
    order_details: "",
    order_date: "",
    completion_date: "",
    price: 0,
    status: "pending",
    payed: false,
    created_at: "",
    updated_at: "",
    id: "",
    user: null,
};

const ContextProvider = createContext<OrderContextType | undefined>(undefined);

type OrderContextProviderProps = {
    children: ReactNode;
};

const OrderContextProvider: React.FC<OrderContextProviderProps> = ({
    children,
}) => {
    const [order, setOrder] = useState<Order | null>(defaultValues);

    const orderDetails = { order, setOrder };

    return (
        <ContextProvider.Provider value={orderDetails}>
            {children}
        </ContextProvider.Provider>
    );
};

export { ContextProvider, OrderContextProvider };
