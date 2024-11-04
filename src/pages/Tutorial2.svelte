<script>

  import First from "../components/First.svelte"
  import Info from "../components/Info.svelte"
  import Child from "../components/Child.svelte"
  import StyleProps from "../components/StyleProps.svelte"
  import { bubble } from "svelte/internal";
  import  KeyComp from '../components/KeyComp.svelte'
  let arr = ["H", "E", "L", "L", "O"]
  let value = 0

  const arrayLike = {
    0: "H",
    1: "I",
    length : 2
  }

  const objArr = [
    {id:1 , value: "H"},
    {id:2 , value: "I"},
    {id:3 , value: "J"},
    {id:4 , value: "K"},
    {id:5 , value: "L"}
  ]


  const itrb = {
    [Symbol.iterator]: function* (){
      yield "H";
      yield "E";
      yield "L";
      yield "L";
      yield "I";
    }
  }

  let promise = getRandomNumber()

  function getRandomNumber(){
    return new Promise((res, rej) => {
      setTimeout(()=> {
        res(Math.random())
      }, 3000)
    })
  }
  function handleClick(){
    promise =getRandomNumber()
  }
</script>

<style>

</style>


<h2>Tutorial2 - from chapter6</h2>
<p> key를 사용한 삭제 </p>
<ul>
  {#each arr as item, index(index)}
    <li>{index + 1} : {item}</li>
  {/each}
</ul>
<button on:click="{() => arr = arr.slice(1)}">remove first</button>
<p> 구조분해 사용</p>
<ul>
  {#each objArr as {id, value}}
    <li>{id} : {value}</li>
  {/each}
</ul>
<p>유사배열도 each 문을 쓸 수 있다.</p>
<ul>
  {#each arrayLike as item}
    <li>{item}</li>
  {/each}
</ul>

<p>이터러블 객체( *이터러블과 이터레이터의 차이를 알아두자)</p>
<ul>
  {#each [...itrb] as item}
    <li>{item}</li>
  {/each}
</ul>
<p> each - else 문 </p>
<ul>
  {#each [...arr] as item}
    <li>{item}</li>
  {:else}
    <li>빈 배열입니다.</li>    
  {/each}
</ul>
<p> await 구문 - promise 를 연계해서 쓰는 비동기 구문</p>
{#await promise}
  <p> waiting </p>
{:then number}
 <p> number generated {number}</p>  
{:catch error}
 <p>  {error}</p> 
{/await}  
<p> 단축구문</p>
{#await promise then number}
 <p> number generated {number}</p>  
{/await}  

<p> key 블록. 컴포넌트가 다시 생성됨 </p>
{#key value}
  <KeyComp {value} />
{/key}
<button on:click={() => value++}> AddValue </button> 