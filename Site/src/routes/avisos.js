var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.post("/publicar", function (req, res) {
    avisoController.publicar(req, res);
});

router.get("/buscarComentariosEmTempoReal", function (req, res) {
    avisoController.buscarComentariosEmTempoReal(req, res);
})

module.exports = router;