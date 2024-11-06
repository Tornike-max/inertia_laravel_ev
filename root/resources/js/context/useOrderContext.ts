import { useContext } from "react";
import { ContextProvider } from "./OrderContext";

const useOrderContext = () => {
    const context = useContext(ContextProvider);
    if (context === undefined)
        throw new Error("You can't use context outside of the provider");

    return context;
};

export default useOrderContext;
