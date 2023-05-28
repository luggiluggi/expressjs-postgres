<script lang="ts">
  import { name } from "./stores";
  import Login from "./lib/Login.svelte";
  import Header from "./lib/Header.svelte";
  import Chat from "./lib/Chat.svelte";
</script>

<svelte:head>
  <title>Svelte Chat App</title>
</svelte:head>

<Header />

{#if $name}
  <Chat />
{:else}
  <Login />
{/if}
