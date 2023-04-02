import express from "express";
import "express-async-errors";

const app = express();

app.get("/", (request, response) => {
    response.send("This is the space fact API!");
});

export default app;
