const { Router } = require("express");
const { validarJWT } = require("../middlewares/jwt.middleware");

const {
  registrarUsuario,
  login,
  renovarToken,
} = require("../controllers/auth.ctrl");

const router = Router();

router.post("/register", registrarUsuario);
router.post("/login", login);
router.get("/renew", validarJWT, renovarToken);

module.exports = router;
