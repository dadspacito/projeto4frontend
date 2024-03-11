import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// define the store
export const userStore = create(
  persist(
    (set) => ({
      username: "", // state variable
      setUsername: (username) => set({ username }), // a function to be used to update the state variable
    }),
    {
      name: "mystore", // the name to use for the persisted data
      storage: createJSONStorage(() => sessionStorage), // creates the storage to be used for persisting the state
    }
  )
);
