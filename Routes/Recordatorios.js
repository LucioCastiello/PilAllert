import { Router } from "express";
import RecordatorioControllers from "../Controllers/Recordatorios.js";

const router = Router();

router.post("/Insertar", RecordatorioControllers.insertRecordatorio)
router.get("/Selector/:mail_usuario", RecordatorioControllers.getRecbyMail)


export default router;