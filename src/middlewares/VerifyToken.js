import jwt from "jsonwebtoken"
import { createError } from "../utils/error";
// Hàm này sẽ kiểm tra token từ phía client gửi lại
// const VerifyToken = (req, res, next) => {
//   const authHeader = req.headers.token

//   if (authHeader) {
//     const token = authHeader.split(" ")[1]
//     jwt.verify(token, process.env.JWT_SECRECT_KEY, (err, user) => {
//       if (err) {
//         return res.status(403).json("Token không hợp lệ")
//       }
//       req.user = user;
//       next()
//     })
//   } else {
//     return res.status(401).json("Bạn chưa được xác thực")
//   }
// }


export const VerifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("check procees", process.env.JWT_TOKEN_SECRET)
  if (!token) return res.status(400).json({ message: "Bạn chưa xác thực" });
  jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token không hợp lệ"));
    req.user = user;
    next()
  });
};
  
// kieemr tra user da dang nhap chua
export const VerifyUser = (req, res, next) => {
  VerifyToken(req, res, (err) => {
    if (err) return res.status(400).json("Something went wrong")
    if (req.user.role === 0 || req.user.role === 1) {
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
