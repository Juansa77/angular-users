
export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];

}

export interface User {
  id: number;
  email: string;
  name: string;
  surname1: string;
  surname2: string;
  profileImage: string;
}



// Nuevo JSON
export interface UsersJsonResponse {
  usuarios: UserJson[];
}

export interface UserJson {
  id: number;
  email: string;
  name: string;
  surname1: string;
  surname2: string;
  profileImage: string;
}
