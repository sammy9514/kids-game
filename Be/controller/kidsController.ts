import { Request, Response } from "express";
import kidsModel from "../model/kidsModel";

export const createData = async (req: Request, res: Response) => {
  try {
    const { name, image } = req.body;
    const info = await kidsModel.create({ name, image });

    res.status(201).json({
      message: "created",
      data: info,
    });
  } catch (error) {
    res.status(404).json({
      message: "failed",
    });
  }
};
export const viewData = async (req: Request, res: Response) => {
  try {
    const info = await kidsModel.find();

    res.status(201).json({
      message: "created",
      data: info,
    });
  } catch (error) {
    res.status(404).json({
      message: "failed",
    });
  }
};
export const viewSortedData = async (req: Request, res: Response) => {
  try {
    const info = await kidsModel.find().sort({ name: 1 });

    res.status(201).json({
      message: "created",
      data: info,
    });
  } catch (error) {
    res.status(404).json({
      message: "failed",
    });
  }
};
export const deleteone = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const info = await kidsModel.findByIdAndDelete(id);

    res.status(201).json({
      message: "created",
      data: info,
    });
  } catch (error) {
    res.status(404).json({
      message: "failed",
    });
  }
};
