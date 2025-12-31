const express = require('express');
const aiController = require("../controllers/ai.controller")
const router = express.Router();


router.post("/get-review", aiController.generateCodeReview)

module.exports = router;