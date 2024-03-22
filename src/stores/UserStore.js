import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Objeto modelo para USER

const blankUser = {
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  photoURL: "",
  phone: "",
  role: "",
};

export const userStore = create(
  persist(
    (set) => ({
      // Armazena o token
      token: "",
      // Função para atualizar o token
      setToken: (token) => set({ token }),

      // estado inicial do user / userTarget

      userDetails: { ...blankUser },
      userTargetDetails: { ...blankUser },

      // ACTIONS

      // Atualiza todos os detalhes do user
      setUserDetails: (userDetails) => set({ userDetails }),

      // Atualiza atributos específicos de userDetails
      updateUserDetails: (updates) =>
        set((state) => ({
          userDetails: { ...state.userDetails, ...updates },
        })),

      // Define userTargetDetails para ser igual a userDetails (usado para editar próprio perfil)
      editMyProfile: () =>
        set((state) => ({
          userTargetDetails: { ...state.userDetails },
        })),

      // Define userTargetDetails para editar um user diferente

      editProfile: (userTargetDetails) => set({ userTargetDetails }),

      // Atualiza atributos específicos de userTargetDetails (mudar foto p/exemplo)

      updateUserTargetDetails: (updates) =>
        console.log("updates", updates) ||
        set((state) => ({
          userTargetDetails: { ...state.userTargetDetails, ...updates },
        })),

      // Faz reset a userTargetDetails
      emptyUserTargetDetails: () =>
        set({
          userTargetDetails: { ...blankUser },
        }),

      // verificar se está logado

      isLoggedIn: () => {
        return !!userStore.getState().token;
      },
    }),

    {
      name: "userStore", // Nome usado para os dados persistidos
      storage: createJSONStorage(() => sessionStorage), // Define sessionStorage como meio de persistência
    }
  )
);
