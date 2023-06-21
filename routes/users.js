const router = require("express").Router();
const usersController = require("../controllers/usersController.js");

http://localhost:8000/user/add

router.route("/add").post(usersController.addUser);

http://localhost:8000/user/login

router.route("/login").post(usersController.userLogin);


module.exports = router;