import { create } from "zustand";
import { IAuth } from "../types";

type AuthState = {
    userIdentityNumber: string;
    setUserIdentityNumber: (userIdentityNumber: string) => void;
}
export const useAuthStore = create<AuthState>((set) => ({
    userIdentityNumber:'',

    //Set the userIdentityNumber
    setUserIdentityNumber: (userIdentityNumber: string) => {
        set({ userIdentityNumber })
    },
}))
