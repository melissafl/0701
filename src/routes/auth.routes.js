const { Router } = require("express");

const { registrarUsuario, login } = require("../controllers/auth.ctrl");

const router = Router();

router.post("/register", registrarUsuario);
router.post("/login", login);

module.exports = router;
