import jwt from "jsonwebtoken"
import { createError } from "../utils/error";

export const VerifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  
  if (!token) return res.status(401).json({ message: "Bạn chưa xác thực" }); // chưa nhận được jwt

  jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token không hợp lệ"));
    req.user = user;
    console.log(req.user)
    next()
  });
};
  
// kieemr tra user da dang nhap chua
export const VerifyUser = (req, res, next) => {
  VerifyToken(req, res, (err) => {
    if (err) return res.status(400).json("Something went wrong")
    if (req.user) {
      next()
    } else {
      return res.status(400).json("Bạn không có quyền truy cập vào (from client service)")
    }
  })
}

// kiem tra admin
export const VerifyAdmin = (req, res, next) => {
  VerifyToken(req, res, (err) => {
   if (err) return res.status(400).json("Something went wrong")
   if (req.user.isAdmin) {
     next();
   } else {
     return res.status(400).json("Bạn k có quyền truy cập vào chức năng này (case ADMIN)");
   }
 });
};

// cho le tan

// cho chu khach san
