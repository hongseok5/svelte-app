<script>
    import {count} from "../store/store.js"

    export let num;
    export let text;
    function handleUpdate(){
        count.update(n => n+num)
        // $count += num;
    }
</script>

<button on:click="{handleUpdate}">{text}</button>