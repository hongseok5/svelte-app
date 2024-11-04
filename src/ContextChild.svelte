<script>
    import {getContext, hasContext} from 'svelte'
    import {textKey} from "./contexts"

    export let name;
    
    const {getText} = getContext(textKey)
    function handlePrint(){
        console.log(`${name} : ${getText()}`)
    }
</script>

<button on:click="{handlePrint}">버튼</button>