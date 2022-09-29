import { Router } from "express";
import { UserController } from "./controllers/userController";
import { UserExistByIdMiddleware } from "./middlewares/userExistByIdMiddleware";

const routes = Router();

routes.get("/users", UserController.get);
routes.post("/user", UserController.create);
routes.delete(
  "/user/:id/delete",
  UserExistByIdMiddleware,
  UserController.delete
);
routes.put("/user/:id/edit", UserExistByIdMiddleware, UserController.edit);

export { routes };
