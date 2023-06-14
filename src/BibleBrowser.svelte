<script>
    import { getBibles } from "./lib/getData.js"
    import { fade } from "svelte/transition";
    import { flip } from "svelte/animate";

    export let width;
    export let height;

    let bibles = getBibles();

    function deleteBible(i) {
        bibles.splice(i, 1);
        bibles = bibles;
    }
</script>

<div style:width style:height>
    <ul>
        {#each bibles as bible, i (bible.id)}
            <li in:fade="{{duration: 200}}" out:fade="{{duration: 200}}" animate:flip="{{duration: 200}}">
                <h3>
                    Name
                </h3>
                <p>               
                    <b>{bible.name}</b>
                </p>
                <h3>
                    Abbreviation
                </h3>
                <p>               
                    {bible.abbreviation}
                </p>
                <h3>
                    Copyright
                </h3>
                <p>                
                    {bible.copyright}
                </p>
                <button on:click|stopPropagation={() => {deleteBible(i)}}>
                    Delete Bible
                </button>
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    li {
        background-color: #e5d3b3;
        padding: 5px;
        margin: 5px;
        border: solid black;
        border-radius: 3px;
        width: fit-content;
        list-style-type: none;
    }
    li p {
        margin: 5px;
        padding: 3px;        
        border-radius: 3px;
        background-color: #664229;
        color: azure;
    }
    li button {
        margin: 5px;
        background-color: #987554;
        border-radius: 3px;
    }
    li h3 {
        margin: 5px;
    }
</style>