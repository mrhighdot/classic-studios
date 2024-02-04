import express from "express";
import * as dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./schema/index.js";
//initialized dotenv
dotenv.config();

const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello there");
});

//server initialization
const server = new ApolloServer({ typeDefs, resolvers });

app.listen(port, () =>
  console.log(`listening on port http://localhost:${port}`)
);
