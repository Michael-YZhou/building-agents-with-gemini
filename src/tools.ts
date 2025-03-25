import { Tool, SchemaType, FunctionCallingMode } from "@google/generative-ai";
import { genAI } from "./bot.js";
import { get } from "node:http";

// tool provide to the agent

export const tools: Tool[] = [
  {
    functionDeclarations: [
      {
        name: "getDate",
        description: "Get the current date and use it to workout other days",
      },
      {
        name: "add",
        description:
          "Add two numbers together. Use this for accurate addition.",
        parameters: {
          type: SchemaType.OBJECT,
          description: "The numbers to add together",
          required: ["a", "b"],
          properties: {
            a: {
              type: SchemaType.NUMBER,
              description: "The first number",
            },
            b: {
              type: SchemaType.NUMBER,
              description: "The second number",
            },
          },
        },
      },
      {
        name: "multiply",
        description:
          "Multiply two numbers together. Use this for accurate multiplication.",
        parameters: {
          type: SchemaType.OBJECT,
          description: "The numbers to multiply together",
          required: ["a", "b"],
          properties: {
            a: {
              type: SchemaType.NUMBER,
              description: "The first number",
            },
            b: {
              type: SchemaType.NUMBER,
              description: "The second number",
            },
          },
        },
      },
    ],
  },
];

export const functions = { getDate, add, multiply };

function getDate() {
  return { date: new Date().toDateString() };
}

function add({ a, b }: { a: number; b: number }) {
  return { additionResult: a + b };
}

function multiply({ a, b }: { a: number; b: number }) {
  return { multiplicationResult: a * b };
}
