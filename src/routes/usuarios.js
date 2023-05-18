var express = require("express");
var router = express.Router();

var usuarioController = require("../controller/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/comentar", function (req, res) {
    usuarioController.comentar(req, res);
});

router.post("/interacao_big_bang", function (req, res) {
    usuarioController.interacao_big_bang(req, res);
});

router.post("/interacao_buracos", function (req, res) {
    usuarioController.interacao_buracos(req, res);
});

router.post("/interacao_multiversos", function (req, res) {
    usuarioController.interacao_multiversos(req, res);
});

router.post("/interacao_crunch", function (req, res) {
    usuarioController.interacao_crunch(req, res);
});
module.exports = router;