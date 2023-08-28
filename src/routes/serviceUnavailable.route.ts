import { Routes } from '@interfaces/route.interface';
import { Router } from 'express';
import ServiceUnavailableController from '@controllers/serviceUnavailable.controller';

class ServiceUnavailableRoute implements Routes {
  public path = '/';
  public router = Router();

  private serviceUnavailableController = new ServiceUnavailableController();

  constructor() {
    this.initiateRoutes();
  }

  private initiateRoutes() {
    this.router.all(`${this.path}`, this.serviceUnavailableController.serviceUnavailable);
  }
}

export default ServiceUnavailableRoute;
