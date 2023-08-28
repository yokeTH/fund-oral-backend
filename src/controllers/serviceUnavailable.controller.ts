import HttpException from "@/exceptions/http.exception";
import { NextFunction, Request, Response } from "express";

export default class ServiceUnavailableController {
  public async serviceUnavailable(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    next(new HttpException(503, "Service unavailable!!"));
  }
}
