// User interfaces
export interface IUserEntity {
  name: string;
  userName: string;
  email: string;
  phone: string;
  status: "active" | "not_active" | null;
}

// Zustand interfaces
export interface IUsersState {
  users: IUserEntity[];
  addUser: (user: IUserEntity) => void;
  updateUser: (user: IUserEntity) => void;
}
