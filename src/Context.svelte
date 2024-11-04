<script>
    import {setContext} from 'svelte';
    import {textKey} from './contexts'
    import ContextChild from './ContextChild.svelte'

    export let name;

    let text = 'contextAPI'
    setContext(textKey, {getText : () => text})
</script>

<div>
    {name} : <input type="text" bind:value="{text}">
    <ContextChild {name} />
</div>