import bodyParser from "body-parser";
import express from "express";
import pg from "pg";
import {Server} from "socket.io"

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
const pool = new pg.Pool();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.static("client/dist"))

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT NOW()");
  res.send(`Hello, World! The time from the DB is ${rows[0].now}`);
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Socket.io
const io = new Server<client_to_server_events, server_to_client_events, inter_server_events, socket_data>(server);

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);

  // receive a message
  socket.on("message", (msg => {
    io.emit("message", msg)
  }))
});
