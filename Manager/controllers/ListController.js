class ListController {
    
    // [GET]/list
    index(req, res){
        res.render('list');
    }

    // [GET]/list/:slug
    show(req, res){
        res.send('LIST SLUG');
    }
}

module.exports = new ListController;