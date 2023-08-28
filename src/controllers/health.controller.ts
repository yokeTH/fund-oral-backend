import { NextFunction, Request, Response } from 'express';

export default class HealthController {
  public async health(req: Request, res: Response, next: NextFunction) {
    res.json({ status: 'ok' });
  }
}
