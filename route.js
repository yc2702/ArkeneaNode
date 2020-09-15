module.exports = function (app) {


    app.all('*', function (req, res, next) {
        console.log('got req',req.originalUrl)
        next();
    })

    const userController = require("./controllers/user");
    app.post('/api/user', userController.createUser)

    app.get('/api/users', userController.getAll)

    app.put('/api/user', userController.userUpdate)

    app.delete('/api/user/:id', userController.userDelete)

    app.get('/api/user/:id', userController.getDetails)
}