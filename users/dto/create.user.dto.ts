// DTO is an object that holds the raw data that the DAO will send to
export interface CreateUserDto {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  permissionLevel?: number;
}
