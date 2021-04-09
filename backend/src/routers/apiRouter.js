import express from "express";
import {registerProduct} from "../controllers/apiCOntrollers";

const apiRouter = express.Router();

apiRouter.post("/register-product", registerProduct);

export default apiRouter;