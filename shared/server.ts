import express from "express";
import cors from "cors";
import { router } from "../router";

const server = express();
server.use(cors());
server.use(express.json());

router.get("/", (req, res) => {
  res.send("UTFPR");
});

server.use(router);

export { server };
