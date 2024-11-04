<script>
 import Inner from "../components/Inner.svelte"
 import {onMount, onDestroy, beforeUpdate, afterUpdate} from 'svelte'
 import {onInterval} from "../utils/util";   // 모듈화한 라이프사이클 함수
 import {tick} from "svelte" // tick은 특정한 호출시점이 없다. tick함수는 promise를 반환한다. 변경된 내용이 있으면 변경사항을 DOM에 반영한 직후에 resolve됨.
 import {count} from "../store/store.js"
 let text = `ABCDEFGIWJEF`
 let photos = []
 let sec = 0
 let div
 let autoscroll
 /*
 onMount(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
    photos = await res.json()
 })

 onMount(()=> {
   const interval = setInterval(() => sec +=1, 1000)
   return () => clearInterval(interval)   // 함수를 반환하면 컴포넌트가 DOM에서 제거될 떄 실행한다.
 })

 
 //const interval = setInterval(() => sec += 1, 1000)
 //onDestroy(() => clearInterval(interval)) // destroy 는 컴포넌트가 제거되기 직전에, 위의 onMount return 은 제거될때. 차이가 있는지? 
 
 beforeUpdate(() => {
   autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20)
 })
    */
   onInterval(() => sec +=1, 1000)
   async function handleKeydown(event){
      console.log(event)
      const textarea = event.target;
      if(event.which !== 9 ) return;
      const {selectionStart, selectionEnd, value } = textarea;
      console.log(textarea)
      const selection = value.slice(selectionStart, selectionEnd);
      console.log(selection)
      const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase()
      text = (value.slice(0, selectionStart) + replacement + value.slice(selectionEnd))
      await tick()
      this.selectionStart = selectionStart
      this.selectionEnd = selectionEnd

   }
</script>

<style>
 .photos{
    width: 100;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(5,1fr);
 }

 figure, img{
    width: 100%;
    margin: 0;
 }
</style>
<div bind:this="{div}">
DIV
</div>
<p>컴포넌트 사이클</p>
<p>{sec} {sec === 1 ? 'second' : 'seconds'}</p>
<textarea value={text} on:keydown|preventDefault={handleKeydown}></textarea>

<input bind:value="{$count}" />
<p>{$count}</p>