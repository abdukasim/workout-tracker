import { Request } from "express";

export interface CustomUserRequest extends Request {
  user?: any;
}
