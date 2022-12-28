
import { Router } from "express";
import { getAll, getOne } from '../controllers/getControllers.js'
import { addPaciente } from "../controllers/addControllers.js";
import { deletePaciente } from '../controllers/delControllers.js'
import { putPaciente } from "../controllers/updateControllers.js";






const router = Router()

// read
router.get(`/`, getAll);
router.get('/paciente',getOne);
// add
router.post('/paciente', addPaciente)
// update
router.put('/paciente', putPaciente);
// delete
router.delete(`/paciente`, deletePaciente)


export default router;