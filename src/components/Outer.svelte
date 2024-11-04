<script>
    import Inner from './Inner.svelte'
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    function forward(event) {
        dispatch('message', event.detail)
    }
    // 컴포넌트이벤트는 버블링되지 않는다. 자동으로 상위요소로 이벤트가 전달되지 않기 때문에 의도적으로 부모 컴포넌트로 이벤트를 전달해야 한다.
    // 위를 이벤트 포워딩이라고 하는데 그냥 다 생략해도 알아서 작동하는듯
    // <Inner on:message /> 이렇게만 써도 작동된다. 스크립트도 다 생략
</script>

<Inner on:message={forward} />