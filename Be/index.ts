console.clear();
import express, { Application, Request, Response } from "express";
import cors from "cors";
import { mainConnection } from "./utils/dbConfig";
import { mainApp } from "./mainApp";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const port = 2211;

const app: Application = express();

app.use(express.json());
app.use(cors());
mainApp(app);
mainConnection();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hi set07",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:2211/",
      },
    ],
  },
  apis: ["./router/*.ts"],
};
const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "Api is active and ready",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error from server",
    });
  }
});
const server = app.listen(port, () => {
  console.log("server is connected");
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);
  server.close(() => {
    process.exit(1);
  });
});
