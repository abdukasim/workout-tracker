import prisma from "../db";
import { Request, Response } from "express";

export const getAllExercises = async (_req: Request, res: Response) => {
  const exercises = await prisma.exercise.findMany();
  res.json({ data: exercises });
};

export const getExercise = async (req: Request, res: Response) => {
  const id = req.params.id;

  const exercise = await prisma.exercise.findFirst({
    where: {
      id,
    },
  });

  res.json({ data: exercise });
};

export const createExercise = async (req: Request, res: Response) => {
  const created = await prisma.exercise.create({
    data: {
      name: req.body.name,
    },
  });

  res.json({ data: created });
};
