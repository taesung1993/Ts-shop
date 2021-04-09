import express from "express";

const apiRouter = express.Router();

apiRouter.post("/register-product", (req, res, next) => {
    console.log("post 요청 들어옴!");
    console.log(req.body);
    //next();
});

export default apiRouter;