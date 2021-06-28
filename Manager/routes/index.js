const siteRouter = require('./site');

const waitingRouter = require('./waiting');
const preparingRouter = require('./preparing');
const doneRouter = require('./done');


function route(app){

  app.use('/wating', waitingRouter);
  app.use('/preparing', preparingRouter);
  app.use('/done', doneRouter);
  app.use('/', siteRouter);

}

module.exports = route;
