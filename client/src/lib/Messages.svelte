<script lang="ts">
    import Message from "./Message.svelte";

    export let messages: message[] = [];
    export let messages_element: HTMLElement;
</script>

<section aria-label="messages" bind:this={messages_element}>
    <ol>
        {#each messages as message}
            <Message {message} />
        {/each}
    </ol>
</section>

<style>
    ol {
        list-style-type: none;
    }
    section{
        padding: 0.5rem;
        overflow-y: scroll;
    }
</style>