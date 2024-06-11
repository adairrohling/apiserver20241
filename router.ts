import { Router } from "express";
import { listStudent, saveStudent } from "./controllers/student";
const router = Router();

router.get("/students", listStudent);
router.post("/students", saveStudent)

export { router };
