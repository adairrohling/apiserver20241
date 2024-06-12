import { Router } from "express";
import { listStudent, saveStudent, deleteStudent } from "./controllers/student";
const router = Router();

router.get("/students", listStudent);
router.post("/students", saveStudent);
router.delete("/students/:id", deleteStudent);

export { router };
