import express from 'express';
import { Routes } from '@/interfaces/route.interface';
import { errorMiddleware } from '@/middlewares/error.middleware';
import ServiceUnavailableRoute from '@/routes/serviceUnavailable.route';
import morgan from 'morgan';
import logger from '@/utils/logger';
import { SERVER_PORT } from '@/config';

class App {
  public app: express.Application;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    console.log(SERVER_PORT);
    this.port = SERVER_PORT || 9999;

    this.initiateDatabase();
    this.initiateMiddlewares();
    this.initiateRoutes(routes);
    this.initiateErrorHandling();
  }

  private initiateRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    });
    this.app.use('*', new ServiceUnavailableRoute().router);
  }

  private initiateMiddlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initiateDatabase() {
    // if (MONGO_URI) {
    //   initiateMongo(MONGO_URI);
    // } else {
    // }
  }

  private initiateErrorHandling() {
    this.app.use(errorMiddleware);
  }

  public listen(port = this.port) {
    this.app.listen(port, () => {
      logger.info(`=================================`);
      logger.info(`App listening on the port ${port}`);
      logger.info(`=================================`);
    });
  }
}

export default App;
