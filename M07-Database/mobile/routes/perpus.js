const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const perpusCtrl = require("../controllers/perpus");

//Method
router.get("/buku/:id", checkAuth, perpusCtrl.cariBuku);
router.post("/buku/", checkAuth, perpusCtrl.tambahBuku);
router.put("/buku/", checkAuth, perpusCtrl.updateBuku);
router.delete("/buku/:id", checkAuth, perpusCtrl.hapusBuku);

module.exports = router;
