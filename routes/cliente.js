const { Router } = require("express");
const router = Router();
const User = require("../controller/client");

router.post("/client", User.addClient);

module.exports = router;
