<script>
    import {count} from '../store/store'

    export let num;
    export let text;
    console.log(count)
    function handleSet(){
        count.set(num)
        //$count = num 자동구독
    }

</script>

<button on:click="{handleSet}">{text}</button>