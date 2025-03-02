import { AuthState } from "../types";
import { create } from "zustand";

//Create a store for authentication
export const useAuthStore = create<AuthState>((set) => ({
    userIdentityNumber: '',

    //Set the userIdentityNumber
    setUserIdentityNumber: (userIdentityNumber: string) => {
        set({ userIdentityNumber })
    },
}))
