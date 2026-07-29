const express = require("express");

const router = express.Router()

const {getUsers, getProfile, userRegistration, userLogin}  = require("../controllers/user.controllers")

router.get("/", getUsers)

router.get("/profile", getProfile );

router.get("/registration", userRegistration);

router.get("/login", userLogin);



module.exports = router