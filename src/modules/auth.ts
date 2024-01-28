import jwt, { Jwt, JwtPayload } from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { User } from ".prisma/client";
import { Response, NextFunction } from "express";
import { CustomUserRequest } from "../types/user";

export const createJWT = (user: User) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET as jwt.Secret
  );
  return token;
};

export const protect = (
  req: CustomUserRequest,
  res: Response,
  next: NextFunction
) => {
  console.log({ req: req.body });
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send("Not authorized");
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.send("Not valid token");
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);
    req.user = payload;
    console.log(payload);
    next();
    return;
  } catch (error) {
    console.error(error);
    res.status(401);
    res.send("Not authorized");
    return;
  }
};

export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 5);
};
