import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import generateIcebreakingQuestions from "./icebreaking.js"; // need to add the .js extension
import Joi from "joi";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send({
    status: "healthy",
  });
});

const profileSchema = Joi.object({
  name: Joi.string().required(),
  offer: Joi.string().required(),
  lookingFor: Joi.string().required(),
});

const iceBreakingPayloadSchema = Joi.object({
  profiles: Joi.array().items(profileSchema).required(),
});

app.post("/api/generate_icebreaking_questions", async (req, res) => {
  const { error, value } = iceBreakingPayloadSchema.validate(req.body);

  if (error) {
    console.error(error);
    return res.status(400).json({ error: "Bad request" });
  }

  const result = await generateIcebreakingQuestions(value.profiles);

  res.status(200).json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
