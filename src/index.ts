import express, { Request, Response } from "express";
// import generateResponse from "./util/gpt.generateResponse";
// import router from "./route/gpt.route";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
    res.send("ok")
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
