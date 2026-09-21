import Router from "express";
import contact from "../controllers/contact.controller.js";

const contactRouter = Router();
contactRouter.route("/contact").post(contact);

export default contactRouter;
