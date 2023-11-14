import { Router } from "express";
import {
  createData,
  deleteone,
  viewData,
  viewSortedData,
} from "../controller/kidsController";

const router: Router = Router();

/**
 * @swagger
 * /createData:
 *   post:
 *    summary: This is the createData endpoint
 *    description: This post
 */

router.route("/createData").post(createData);
/**
 * @swagger
 * /viewData:
 *   get:
 *       summary: This is the viewData endpoint
 *       description: This api don do!!
 */
router.route("/viewData").get(viewData);
router.route("/viewSortedData").get(viewSortedData);
router.route("/delete/:id").delete(deleteone);
export default router;
