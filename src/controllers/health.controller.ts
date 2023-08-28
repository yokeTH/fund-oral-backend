import { Request, Response } from 'express';

export default class HealthController {
  public async health(req: Request, res: Response) {
    res.json({ status: 'ok' });
  }
}
