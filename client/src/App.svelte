<script lang="ts">
  import { io, Socket } from "socket.io-client";
  import Login from "./lib/Login.svelte";

  // const socket: Socket<server_to_client_events, client_to_server_events> = io();

  // socket.on("message", (msg) => {
  //   console.log(msg);
  // });

  // let txt: string;

  // function handle_submission() {
  //   socket.emit("message", {
  //     user_name: "Emil",
  //     text: txt,
  //     bot: false,
  //   });
  // }
</script>

<Login />
