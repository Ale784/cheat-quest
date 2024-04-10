import Express, { json } from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import fs from "node:fs";
import path from "node:path";

const app = Express();
const server = createServer(app);
const io = new Server(server);
const __dirname = new URL("../", import.meta.url).pathname;

const directoryPaths = {
  staticDir: path.join(__dirname, "client"),
  dataDir: path.join(__dirname, "src/data/questions.json"),
};

app.use(Express.static(directoryPaths.staticDir + "/client"));

io.on("connection", (socket) => {
  console.log("A user is connected");
    socket.on("startGame", (count) => {
        console.log(count)
    });
});


server.listen(3001, () => {
  console.log("listening at port http://localhost:3001/");
});
