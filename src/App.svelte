<script>
    import Window from "./Window.svelte";

    let windows = [];

    function onClick() {
        windows.push({});
        windows = windows;
    }
</script>

<button on:click={onClick}>+</button>

<div>
    {#each windows as window}
        <Window width="500px" height="500px"/>
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
    }
</style>

