import jwt from "jsonwebtoken"



// Hàm này sẽ kiểm tra token từ phía client gửi lại
const VerifyToken = (req, res, next) => {
  const authHeader = req.headers.token

  if (authHeader) {
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.JWT_SECRECT_KEY, (err, user) => {
      if (err) {
        return res.status(403).json("Token không hợp lệ")
      }
      req.user = user;
      next()
    })
  } else {
    return res.status(401).json("Bạn chưa được xác thực")
  }
}




module.exports =
  { VerifyToken };