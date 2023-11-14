import { Document, Schema, model } from "mongoose";

interface iData {
  name: string;
  image: string;
}

interface iKidsData extends iData, Document {}

export const kidsModel = new Schema<iKidsData>(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model<iKidsData>("fame", kidsModel);
