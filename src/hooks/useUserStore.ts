import { create } from "zustand";
import { IUsersState } from "../interfaces";

export const useUsersStore = create<IUsersState>((set) => ({
  users: [],

  addUser: (user) => set((state) => ({ users: [...state.users, user] })),

  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.userName === updatedUser.userName ? updatedUser : user
      ),
    })),
}));
