export interface IUserEntity {
  name: string;
  userName: string;
  email: string;
  phone: string;
  status: "active" | "not_active" | null;
}
