import { createContext, useContext } from "react";

export const Parent_API_Context = createContext(null);

export const use_Parent_API = () => {
    const context = useContext(Parent_API_Context);
    if (!context) {
        throw new Error(
            "useParentAPI must be used inside Parent_API_Provider"
        );
    }
    return context;
};
