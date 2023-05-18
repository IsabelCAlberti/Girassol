var express = require("express");
var router = express.Router();

var medidaController = require("../controller/medidaController");


router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/comentarios/:idComentarios", function (req, res) {
    medidaController.buscarComentariosEmTempoReal(req, res);
})

module.exports = router;