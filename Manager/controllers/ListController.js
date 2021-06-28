class ListController {
    
    // [GET]/waiting
    index_waiting(req, res){
        res.render('home');
    }

    // [GET]/preparing
    index_preparing(req, res){
        res.render('home');
    }

    // [GET]/done
    index_done(req, res){
        res.render('home');
    }

    // [GET]/list/:slug
    show(req, res){
        res.send('LIST SLUG');
    }
}

module.exports = new ListController;