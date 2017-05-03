var pacman = require('../controllers/pacman.js')

module.exports = function(app){
    app.get("/pacman", function(req, res){
        res.render("pacman");
    });
}
