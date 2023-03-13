const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json("Нет доступа");
  }

  const [type, token] = authorization.split(" ");

  if (type !== "Bearer") {
    return res.json("Не верный токен");
  }

  try {
    req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY)
    next()
  } catch (error) {
    return res.json(error.message)
  }
};
