import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// define the store

/// aqui vai receber as tarefas e vai guarda-las como estados
// Objeto modelo para TASK
const blankTask = {
  title: "",
  description: "",
  category: "",
  priority: 0,
  initialDate: "",
  finalDate: "",
  owner: "",
  status: 0,
  active: true,
};

export const taskStore = create(
  persist(
    (set) => ({
      task: { ...blankTask },

      setTask: (task) => set({ task }),

      updateTask: (updates) =>
        set((state) => ({
          task: { ...state.task, ...updates },
        })),

      tasks: [], // state variable
      setTasks: (tasks) => set({ tasks }), // a function to be used to update the state variable
    }),
    {
      name: "taskStore", // the name to use for the persisted data
      getStorage: () => sessionStorage, // creates the storage to be used for persisting the state
      storage: createJSONStorage(() => sessionStorage), // Define sessionStorage como meio de persistência
    }
  )
);
