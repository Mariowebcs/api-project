import express from "express";
import "express-async-errors";

const app = express();

app.get("/", (request, response) => {
    response.send("This is the space fact API!");
});

const port = 3000;

app.listen(port, () => {
    console.log(`[Server] : Server is running at : http://localhost:${port}`);
});

