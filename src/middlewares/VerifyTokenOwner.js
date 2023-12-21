import jwt from "jsonwebtoken"
import { createError } from "../utils/error"

export const VerifyToken = (req, res, next) => {
  const token = req.cookies.access_token_owner;
  if (!token) return res.status(400).json({ message: "Bạn chưa xác thực" });
  jwt.verify(token, process.env.JWT_TOKEN_SECRET_OWNER_RECEPTION, (err, user) => {
    if (err) return next(createError(403, "Token không hợp lệ"));
    req.user = user;
    next()
  });
};


export const verifyReception = (req, res, next) => {
  VerifyToken(req, res, (err) => {
    if (err) return res.status(400).json("Something went wrong from owner")
    if (req.user.role === "reception") {
      next()
    }else {
      return res.status(400).json("Bạn k có quyền truy cập vào chức năng này (case for RECEPTION)");
    }
  })
}

export const verifyOwner = (req, res, next) => {
  VerifyToken(req, res, (err) => {
    if (err) return res.status(400).json("Something went wrong from owner")
    if (req.user.role === "owner") {
      next()
    }else {
      return res.status(400).json("Bạn k có quyền truy cập vào chức năng này (case for OWNER)");
    }
  })
}

