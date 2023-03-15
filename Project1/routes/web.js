const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')

function initRoutes(app) {

    // Route for Home Page
    app.get('/', homeController().index)
    
    // Route for Login Page
    app.get('/login', authController().login)
    
    // Route for Register Page
    app.get('/register', authController().register)
    app.post('/register', authController().postRegister)

    // Route for Cart Page
    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
}

module.exports = initRoutes