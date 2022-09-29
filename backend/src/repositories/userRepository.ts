import { User } from "../entities/user";
import { prismaClient } from "../../prisma/prismaClient";

class userRepository {
  constructor() {}

  async getAllUsers(): Promise<User[]> {
    const users = await prismaClient.user.findMany({});

    return users;
  }

  async createNewUser(data: User): Promise<User> {
    const userCreated = await prismaClient.user.create({ data });

    return userCreated;
  }

  async deleteUserById(id: number): Promise<User> {
    const userDeleted = await prismaClient.user.delete({
      where: { id },
    });

    return userDeleted;
  }

  async editUser(id: number, data: User): Promise<User> {
    const userEdited = await prismaClient.user.update({
      where: { id },
      data,
    });

    return userEdited;
  }

  // utils

  async findById(id: number): Promise<User | null> {
    const existUser = await prismaClient.user.findUnique({
      where: { id },
    });

    return existUser;
  }
}

export const UserRepository = new userRepository();
