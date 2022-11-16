// Importing router and routes
const router = require("express").Router();
const staticRoutes = require("./staticRoutes");
const apiRoutes = require("./api");

// Apply new routes
router.use("/", staticRoutes);
router.use("/api", apiRoutes);

// Export the updated router
module.exports = router;