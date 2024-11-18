const express = require("express")
const router = express.Router();
const patientController = require("../controller/patientController")


router.post("/",patientController.createPatient)
router.get("/",patientController.getPatient)
router.get("/:id",patientController.getPatientById)
router.delete("/:id",patientController.deletePatient)
router.get("/contact/:contact",patientController.getPatientByName)
router.get("/name/:name",patientController.getPatientByName)

module.exports = router