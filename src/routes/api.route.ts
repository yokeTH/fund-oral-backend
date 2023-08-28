import { Routes } from '@/interfaces/route.interface';
import { Router } from 'express';
import HealthController from '@/controllers/health.controller';

class ApiRoute implements Routes {
  public path = '/api';
  public router = Router();

  private healthController = new HealthController();

  constructor() {
    this.initiateRoutes();
  }

  private initiateRoutes() {
    this.router.get(`${this.path}/health`, this.healthController.health);
  }
}

export default ApiRoute;
