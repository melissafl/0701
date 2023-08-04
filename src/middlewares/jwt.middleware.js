//rew.query viene de query params.

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validarJWT = async (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la petición",
      data: {},
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByID(id);

    if (!user) {
      return res.status(401).json({
        ok: false,
        msg: "Token invalido",
        data: {},
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token invalido",
      data: {},
    });
  }
};

module.exports = {
  validarJWT,
};
