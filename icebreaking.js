import OpenAI from "openai";
import { v0_0_1 } from "./prompts.js";
import axios from "axios";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 *
 * @param {*} question if question is empty, then, we simply return the chat history
 * @returns
 */
const generateIcebreakingQuestions = async (profiles) => {
  // step 1: construct the profiles array
  let profileArray;
  profiles.forEach((profile, index) => {
    profileArray += `Profile ${index + 1}\n`;
    for (const [key, value] of Object.entries(profile)) {
      profileArray += `${key}: ${value}\n`;
    }
    profileArray += "\n"; // Add a blank line between profiles
  });

  // step 2: call OpenAI completion to generate the response
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: v0_0_1(profileArray),
      },
    ],
    model: "gpt-4o",
    temperature: 0.2,
    top_p: 0.5,
    frequency_penalty: 0,
  });

  const messageBody = completion?.choices?.[0]?.message?.content;

  return messageBody
    .trim()
    .replace(/^```json/, "")
    .replace(/```$/, "")
    .trim();
};

export default generateIcebreakingQuestions;
