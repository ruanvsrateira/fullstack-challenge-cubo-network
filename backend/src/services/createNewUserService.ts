import { User } from "../entities/user";
import { UserRepository } from "../repositories/userRepository";

export const CreateNewUserService = async (data: User): Promise<User> => {
  const userCreated = await UserRepository.createNewUser(data);

  return userCreated;
};
