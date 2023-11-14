import { Application, Request, Response } from "express";
import data from "./router/kidsRouter";
export const mainApp = (app: Application) => {
  app.use("/api/v1", data);
  app.get("/", (req: Request, res: Response) => {
    try {
      res.status(200).json({
        message: "done",
      });
    } catch (error) {
      res.status(404).json({
        message: "failed",
      });
    }
  });
};
