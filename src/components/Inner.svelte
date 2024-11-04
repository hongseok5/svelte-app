<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    // createEventDispatcher로 생성된 컴포넌트 이벤트는 CustomEvent이다.
    function sayHello(){
        dispatch('message', {
            text: "Hello!"
        })
    }
    // 바닐라JS에서는 다음과 같이 CustomEvent를 생성할 수 있다.
    /**
     * var event = new CustomEvent('message', {detail : { text: 'hello'}})
     * document.addEventListener('message', function(e){ alert(e.detail.text)}, false)
     * document.dispatchEvent(event)
    */
</script>

<button on:click={sayHello}> Greeting </button>