import { Tool, SchemaType, FunctionCallingMode } from "@google/generative-ai";
import { genAI } from "./bot.js";
import { get } from "node:http";

// tool provide to the agent

export const tools: Tool[] = [
  {
    functionDeclarations: [
      {
        name: "getDate",
        description: "Get the current date",
      },
    ],
  },
];

export const functions = { getDate };

function getDate() {
  return { date: new Date().toDateString() };
}
