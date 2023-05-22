const bookRouter = require('./Book')

function route(app){
    app.use('/' , bookRouter)
}
module.exports = route;