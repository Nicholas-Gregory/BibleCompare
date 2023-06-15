<script>
    import BibleBrowser from "./BibleBrowser.svelte";
    import { fade } from "svelte/transition";

    export let width;
    export let height;
    export let current = "none";

    let components = {
        "BibleBrowser": BibleBrowser
    }

    function onMouseDown() {
        
    }
</script>

<div 
    id="window" 
    style:width 
    style:height 
    bind:clientWidth={width} 
    bind:clientHeight={height}
    in:fade="{{duration: 200}}" 
    out:fade="{{duration: 200}}" 
>
    <div class="topbar" on:mousedown={onMouseDown}>        
        <select bind:value={current}>
            <option value="none">None</option>
            <option value="BibleBrowser">Bible Browser</option>
        </select>
    </div>

    {#if current === "none"}
        <p>
            Select a function for this window.
        </p>
    {:else}
        <svelte:component this={components[current]} width={width} height={height}/>
    {/if}
</div>

<style>
    .topbar {
        height: 20px;        
        position: relative;
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