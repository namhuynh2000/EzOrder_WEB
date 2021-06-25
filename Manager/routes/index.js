const listRouter = require('./list');
const siteRouter = require('./site')

function route(app){

  app.use('/list', listRouter);
  app.use('/', siteRouter);

}

module.exports = route;
