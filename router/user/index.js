const router     = require("express").Router();
const controller = require("./user.controller");
const auth       = require("../auth");
//회원리스트보기
router.get("/", controller.readUserList);
//회원가입페이지로이동
router.get("/new", controller.signupPage);
//회원가입
router.post("/", controller.signupUser);
//회원정보보기
router.get("/:username", controller.showUserInfo);
//회원정보수정페이지
router.get("/:username/edit", controller.editPage);
//회원정보수정
//router.put("/:username", controller.editUser);
//로그인
//router.post("/login", controller.loginUser);

module.exports = router;