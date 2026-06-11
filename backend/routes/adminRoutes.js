const auth = require("../middleware/auth");
const router = require("express").Router();

const {
  createAdmin,
  loginAdmin,
  getMessages,
  deleteMessage,
} = require("../controllers/adminController");

// ADMIN KY ROUTES
router.post("/create", createAdmin);
router.post("/login", loginAdmin);

// MSG SHOW KRWANY KY LIY
router.get("/messages", auth, getMessages);
router.delete("/messages/:id", auth, deleteMessage);

module.exports = router;