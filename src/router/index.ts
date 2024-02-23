import express from "express";

const router = express.Router();

// middleware
router.use(function timeLog(req, res, next) {
  console.log("Time Log: ", Date.now());
  next();
});

router.get("/", function (req, res) {
  res.send("GET request to the home page");
});

router.get("/about", function (req, res) {
  res.send("GET request to the about page");
});

export default router;
