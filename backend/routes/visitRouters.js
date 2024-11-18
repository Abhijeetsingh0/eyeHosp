const express = require("express");
const router = express.Router();
const visitController = require("../controller/visitController");

router.post("/", visitController.createVisit);
router.get("/", visitController.getVisit);
router.get("/:id", visitController.getVisitById);
router.delete("/:id", visitController.deleteVisit);
router.get("/uid/:uid", visitController.getVisitByUid);
router.get("/name/:name", visitController.getVisitByName);

module.exports = router;