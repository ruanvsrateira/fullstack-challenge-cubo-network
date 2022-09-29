import { User } from "../entities/user";
import { UserRepository } from "../repositories/userRepository";

export const EditUserService = async (
  id: number,
  data: User
): Promise<User> => {
  const userEdited = await UserRepository.editUser(id, data);

  return userEdited;
};
