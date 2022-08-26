import { Router } from "express";
import passport from "passport";
import { registerView, registerFailure } from "../controllers/registerController.js";

const registerRouter = Router();

registerRouter.get("/", registerView);

registerRouter.post(
  "/",
  passport.authenticate("register", {
    failureRedirect: "/register/registerFailure",
    successRedirect: "/mailConfirmation/register",
  })
);

registerRouter.get("/registerFailure", registerFailure );

export default registerRouter;
