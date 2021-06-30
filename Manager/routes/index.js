const siteRouter = require('./site');
const pendingRouter = require('./pending');
const waitingRouter = require('./waiting');
const preparingRouter = require('./preparing');
const doneRouter = require('./done');
const cancelRouter = require('./cancel');


function route(app){

  app.use('/waiting', waitingRouter);
  app.use('/preparing', preparingRouter);
  app.use('/done', doneRouter);
  app.use('/pending', pendingRouter);
  app.use('/cancel', cancelRouter);
  app.use('/', siteRouter);

}

module.exports = route;
