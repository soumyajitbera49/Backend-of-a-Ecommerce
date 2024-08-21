const auth_mw = require("../middlewares/auth_mw")

// POST localhost:8888/ecomm/api/v1/categories
category_controller = require("../controllers/category.controller")
auth_MW = require("../middlewares/auth_mw")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/categories",[auth_MW.verifyToken,auth_MW.isAdmin],category_controller.createNewCategory)
}