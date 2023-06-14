<script>
    import BibleBrowser from "./BibleBrowser.svelte";

    export let width;
    export let height;

    let current = "none";

    function onMouseDown() {
        
    }
</script>

<div id="window" style:width style:height bind:clientWidth={width} bind:clientHeight={height}>
    <div id="topbar" on:mousedown={onMouseDown}>
        <span>X</span>
        <select bind:value={current}>
            <option value="none">None</option>
            <option value="BibleBrowser">Bible Browser</option>
        </select>
    </div>

    {#if current === "none"}
        <p>
            Select a function for this window.
        </p>
    {/if}

    {#if current === "BibleBrowser"}
        <BibleBrowser width={width} height={height}/>
    {/if}
</div>

<style>
    #topbar {
        height: 20px;        
        position: fixed;
    }
    #topbar span {
        background-color: red;
        position: relative;
        cursor: pointer;
    }
    #window {
        border: solid black;
        border-radius: 3px;
        overflow: scroll;
        resize: both;
    }

    #window select {
        height: 20px;
        position: relative;
    }
</style>