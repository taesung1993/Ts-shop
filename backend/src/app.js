import express from "express";
import apiRouter from "./routers/apiRouter";

const app = express();

//app.use(bodyParser.json()); // express가 4.16 버전 이하일 경우, body-parser를 사용해줘야한다.
app.use(express.json()); // express의 버전이 4.16이상일 경우, express.json() 메서드를 이용하여 req, res의 body를 파싱하면 된다.
app.use(express.urlencoded({extended: true})); // 중첩된 객체를 파싱할 수 있게 해준다.
app.use("/api", apiRouter);

export default app;