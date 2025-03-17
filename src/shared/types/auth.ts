export interface LoginFormValuesType {
  email: string;
  password: string;
}

export interface RegisterFormValuesType {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  image: string;
}
