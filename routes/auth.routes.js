// POST call
// I need to intercept this


const authController = require("../controllers/auth.controller")
const authMW = require("../middlewares/auth_mw")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/signup",[authMW.verifySignUpBody],authController.signup)

    // routes for
// POST localhost:8888/ecomm/api/v1/auth/signin
    app.post("/ecomm/api/v1/auth/signin",[authMW.verifySignInBody],authController.signin)
}


