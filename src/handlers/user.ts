import { Request, Response } from "express";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";
import prisma from "../db";

export const createNewUser = async (req: Request, res: Response) => {
  const hash = await hashPassword(req.body.password);

  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: hash,
      email: req.body.email,
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

export const signin = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { username: req.body.username },
  });

  const isValid = user && comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.send("Invalid Credentials");
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
