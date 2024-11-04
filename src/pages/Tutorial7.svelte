<script>

    import {tweened} from "svelte/motion"
    import {cubicOut} from "svelte/easing"
    import {spring} from "svelte/motion"  // 나중에 실습
    import {fade} from "svelte/transition"  // 나중에 실습
    import {flip} from "svelte/animate"  // 나중에 실습
    const progress = tweened(0, {
      duration: 400, easing: cubicOut
    })

    async function handleSet(value, options){
      await progress.set(value, options) //  promise를 리턴 . tweend 모션이 종료되면 해결됨
      alert("반영완료")
    }

    let delay = 1000
    function focus(node, {delay} = {delay : 0}){
      console.log(node)
      let id = setTimeout(() => node.focus(), delay)
      return {
        update({delay}){
          clearTimeout(id)
          id = setTimeout(() => node.focus(), delay)
          console.log(id)
        },
        destory(){
          clearTimeout(id)
        }
      }
    }

</script>
  
  <style>
    progress{
      display: block;
      width: 100%;
    }
  </style>
  
  
  <h2>Tutorial7 - 모션, 트랜지션, 애니메이션</h2>
  <progress value={$progress}></progress>
  <!-- <button on:click="{()=> progress.set(0)}">0%</button>
  <button on:click="{()=> progress.set(0.25)}">25%</button>
  <button on:click="{()=> progress.set(0.5)}">50%</button>
  <button on:click="{()=> progress.set(0.75)}">75%</button>
  <button on:click="{()=> progress.set(1)}">100%</button> -->
  <button on:click="{()=> handleSet(0, {duration: 1000})}">0%</button>
  <button on:click="{()=> handleSet(0.25, {duration: 2000})}">25%</button>
  <button on:click="{()=> handleSet(0.5, {duration: 3000})}">50%</button>
  <button on:click="{()=> handleSet(0.75, {duration: 4000})}">75%</button>
  <button on:click="{()=> handleSet(1, {duration: 5000})}">100%</button>
  <h2>Tutorial7-1 - 액션. HTML이 화면에 그려질때 호출되는 함수</h2>
  <input type="range" min="0" max="5000" step="1000" bind:value="{delay}">
  <input use:focus={{delay}}>