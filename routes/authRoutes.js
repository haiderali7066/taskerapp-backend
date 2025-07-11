const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/ping", (req, res) => {
  res.json({ message: "Pong from backend!" });
});


module.exports = router;
