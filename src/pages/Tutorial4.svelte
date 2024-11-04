<script>
 import Inner2 from "../components/Inner2.svelte"
 let name = "world"
 let a = 1
 let b = 2
 let yes = false
 const names = ["jack", "John", "Mike"]
 let checkedNames = []
 const list = [
    {id : 1, text: "A"}, {id : 2, text: "B"}, {id : 3, text: "C"},
 ]
 let selected;
   // 선택된 값들을 담을 변수
   let selectedFruits = [];
  
  // 옵션으로 표시할 과일 리스트
  const fruits = ["Apple", "Banana", "Orange", "Grape"];
  let todos = [
    {done: false, text: "read books"},
    {done: false, text: "study svelete"},
    {done: false, text: "play guitar"},
  ]

  let value
  let input
  let value2

  function handleClick(){
    alert(value2)
  }
</script>


<h2>Tutorial4 - Data binding</h2>
<input bind:value="{name}">
<h1>Hello {name}</h1>

<label>
    <input type="number" bind:value="{a}" >
    <input type="number" bind:value="{b}" >
</label>

<p>{a} + {b} = {a + b}</p>

<label>
    <input type="checkbox" bind:checked="{yes}"> checkbox
</label>
<p> bind group</p>
{#each names as name, index(index)}
 <label>
    <input type="checkbox" value="{name}" bind:group={checkedNames}>
     {name}
 </label>

{/each}
<br>
<div>checked names: {checkedNames}</div>
<p>select tag</p>
<select bind:value="{selected}">
    {#each list as item(item.id)}
        <option value="{item}">{item.text}</option>
    {/each}
</select>

<span>selected : {selected ? selected.id : "waiting ..."}</span>

<p>select tag - multiple</p>
<label for="fruits">Choose your favorite fruits:</label>
<select id="fruits" multiple bind:value={selectedFruits}>
  {#each fruits as fruit}
    <option value={fruit}>{fruit}</option>
  {/each}
</select>

<p>Selected Fruits: {selectedFruits.join(", ")}</p>

<p> each binding </p>
{#each todos as todo, index(index)}
    <label class:done={todo.done}>
        <input type=checkbox bind:checked={todo.done}> {todo.text}
    </label>
{/each}
<p>THis binding- check console</p>
<input bind:value bind:this="{input}">
<button on:click="{()=> {console.log(value, input); input.focus()}}">Focus</button>

<p>Prop binding - a bit tricky. use it as less as possible</p>
<Inner2 bind:value2></Inner2>
<button on:click="{handleClick}" > print</button>