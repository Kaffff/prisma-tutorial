import express from "express";
import { graphqlHTTP } from "express-graphql";
import "reflect-metadata";
import { prisma } from "./context";
import { schema } from "./schema";

const app = express();
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP(async (req) => ({
    schema,
    context: { prisma, req },
  }))
);

export default app;
