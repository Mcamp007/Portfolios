function PacmanController(){
    this.play = function(req, res){
        res.render('pacman');
    }
}

return new PacmanController();
