import { Request, Response } from "express";
import { User } from "../entities/user";
import { CreateNewUserService } from "../services/createNewUserService";
import { DeleteUserByIdService } from "../services/deleteUserByIdService";
import { EditUserService } from "../services/editUserService";
import { GetAllUsersService } from "../services/getAllUsersService";

class userController {
  async get(req: Request, res: Response): Promise<Response> {
    try {
      const users = await GetAllUsersService();

      return res.status(200).send({ users });
    } catch (err) {
      console.log("ERRO => ", err);

      return res.status(500).send({ error: "unknown error" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, lastName, participation } = req.body;
    const user = new User({ name, lastName, participation });

    try {
      const userCreated = await CreateNewUserService(user);

      return res.status(200).send({ userCreated });
    } catch (err) {
      console.log("ERRO =>", err);
      return res.status(500).send({ error: "unknown error" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const userDeleted = await DeleteUserByIdService(Number(id));

      return res.status(200).send({ userDeleted });
    } catch (err) {
      console.log("ERRO =>", err);

      return res.status(500).send({ error: "unknown error" });
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, lastName, participation } = req.body;

    try {
      const userEdited = await EditUserService(Number(id), {
        name,
        lastName,
        participation,
      });

      return res.status(200).send({ userEdited });
    } catch (err) {
      console.log("ERRO =>", err);

      return res.status(500).send({ error: "unknown error" });
    }
  }
}

export const UserController = new userController();
