import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories/userRepository";

export const UserExistByIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const existUser = await UserRepository.findById(Number(id));

  if (!existUser) {
    return res.status(404).send({ error: "user not finded by this id" });
  }

  next();
};
