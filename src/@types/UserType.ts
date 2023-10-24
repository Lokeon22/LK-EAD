export type UserProps = {
  id: number;
  name: string;
  email: string;
  password: string;
  is_admin: boolean;
  created_at: Date;
};

export type UserLogin = {
  user: UserProps;
  token: string;
};
