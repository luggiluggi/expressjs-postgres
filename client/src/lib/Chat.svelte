<script lang="ts">
    import { io, Socket } from "socket.io-client";
    import Messages from "./Messages.svelte";
    import SendForm from "./SendForm.svelte";
    import Users from "./Users.svelte";
    import { users, show_users, name } from "../stores";
    import { onMount, tick } from "svelte";
    import { reload_page, scroll_to_bottom } from "../utils";
    import Menu from "./Menu.svelte";

    let my_message_text = "";
    let messages: message[] = [];
    let messages_element: HTMLElement;

    const socket: Socket<server_to_client_events, client_to_server_events> =
        io();

    onMount(() => {
        socket.emit("login", $name);
    });
    socket.on("message", async (msg) => {
        messages = [...messages, msg];
        await tick();
        scroll_to_bottom(messages_element);
    });

    socket.on("users", (_users) => {
        $users = _users;
    });

    socket.on("disconnect", reload_page);

    function send_message() {
        socket.emit("message", {
            user_name: $name,
            text: my_message_text,
            bot: false,
        });
        my_message_text = "";
    }
</script>

<Menu />
{#if $show_users}
    <Users />
{:else}
    <Messages {messages} bind:messages_element />
    <SendForm {send_message} bind:my_message_text />
{/if}
