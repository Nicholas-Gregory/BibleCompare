<script>
    import { flip } from "svelte/animate";
    import Window from "./Window.svelte";

    let windows = [];
    let currentId = 0;
    let currentDraggee = null;

    function newWindow() {
        windows.push({
                      id: currentId, 
                      width: "500px", 
                      height: "500px",
                      type: "none"
                    });
        windows = windows;
        currentId++;
    }

    function clearSlots() {
        for (let i = 0; i < windows.length; i++) {
            windows[i].draggedOver = false;
        }
    }

    function dragEnd() {
        clearSlots();
        currentDraggee = null;
    }

    function onDragOver(i) {
        clearSlots();
        windows[i].draggedOver = true;
    }

    function onDrop(i) {        
        if (currentDraggee === i) {            
            dragEnd();
            return;
        }

        let mover = windows.splice(currentDraggee, 1)[0];
        
        windows.splice(i, 0, mover);
        windows = windows;
    }

    function closeWindow(i) {
        windows.splice(i, 1);
        windows = windows;
    }
</script>

<button on:click={newWindow}>+</button>

<div>
    {#each windows as window, i (window.id)}
        <div 
            animate:flip="{{duration: 200}}"
            on:dragover|preventDefault={() => {onDragOver(i)}}
            on:drop|preventDefault={() => {onDrop(i)}}

            style="border-left: {window.draggedOver ? "solid red" : "none"};"
        >
            <div class="column">
                <button on:click={() => {closeWindow(i)}}>X</button>
                <button 
                        on:dragstart={() => {currentDraggee = i}}
                        on:dragend|preventDefault={dragEnd}

                        class="drag" 
                        draggable="true" 
                >&#10021;</button>
            </div>
            <Window bind:width={window.width} bind:height={window.height} bind:current={window.type}/>
        </div>
    {:else}
        <p>
            Click the "+" button above to add a window
        </p>
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        margin: 5px;
    }

    .column {
        flex-direction: column;
    }

    div button {
        height: 20px;
        background-color: red;
    }

    .drag {
        background-color: gray;
    }
</style>

