import { User } from "../entities/user";
import { UserRepository } from "../repositories/userRepository";

export const DeleteUserByIdService = async (id: number): Promise<User> => {
  const userDeleted = await UserRepository.deleteUserById(id);

  return userDeleted;
};
