const obtenerUsuarios = (req, res) => {
  return res.json({
    ok: true,
    msg: "Usuarios obtenidos",
    data: [],
  });
};

const crearUsuario = (req, rest) => {
  return res.json({
    ok: true,
    msg: "Usuario creado",
    data: {},
  });
};

const actualizarUsuario = (req, res) => {
  return res.json({
    ok: true,
    msg: "Usuario actualizado",
    data: {},
  });
};

const eliminarUsuario = (req, res) => {
  return res.json({
    ok: true,
    msg: "Usuario eliminado",
    data: {},
  });
};
