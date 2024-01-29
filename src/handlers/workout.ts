import prisma from "../db";
import { Request, Response } from "express";
import { CustomUserRequest } from "../types/user";

export const createWorkout = async (req: CustomUserRequest, res: Response) => {
  const created = await prisma.workout.create({
    data: {
      name: req.body.name,
      userId: req.user.id,
    },
  });
  res.json({ data: created });
};
