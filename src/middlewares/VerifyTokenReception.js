import jwt from "jsonwebtoken"
import { createError } from "../utils/error"

export const VerifyToken = (req, res, next) => {
  const token = req.cookies.access_token_reception;
  if (!token) return res.status(400).json({ message: "Bạn chưa xác thực" });
  jwt.verify(token, process.env.JWT_TOKEN_SECRET_RECEPTION, (err, user) => {
    if (err) return next(createError(403, "Token không hợp lệ"));
    req.user = user;
    next()
  });
};