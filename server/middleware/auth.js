const { User } = require("../models/User");
let auth = (req, res, next) => {
  //인증처리 하는곳
  // client 쿠키에서 토큰 가져옴
  // 토큰 복호화후 유저찾기
  // 유저가 있으면 인증 ok,
  // 유저가 없으면 인증 no

  let token = req.cookies.x_auth;
  console.log("token", token);

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    console.log("authUer", user);
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
