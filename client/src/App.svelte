<script lang="ts">
  import { io, Socket } from "socket.io-client";

  const socket = io();

  socket.on("message", (msg) => {
    console.log(msg);
  });

  let txt: string;

  function handle_submission() {
    socket.emit("message", {
      user_name: "Emil",
      text: txt,
      bot: false,
    });
  }
</script>

<h1>My First Test</h1>

<form on:submit|preventDefault={handle_submission}>
  <input type="text" bind:value={txt} />
  <button>Send</button>
</form>
