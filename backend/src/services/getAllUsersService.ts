import { User } from "../entities/user";
import { UserRepository } from "../repositories/userRepository";

export const GetAllUsersService = async (): Promise<User[]> => {
  const users = await UserRepository.getAllUsers();

  return users;
};
