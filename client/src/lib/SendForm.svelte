<script>
    export let my_message_text = "";
    export let send_message = () => {};
</script>

<form on:submit|preventDefault={send_message}>
    <label for="name_input">Message</label>
    <input type="text" id="name_input" bind:value={my_message_text} required />
    <button>Send message</button>
</form>
