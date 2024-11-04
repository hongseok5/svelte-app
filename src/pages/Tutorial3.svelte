<script>
  import App from "../App.svelte";
  import Outer from "../components/Outer.svelte"
  function handleClick(){
        alert("only once")
   }
   function handleMessage(event){
    alert(event.detail.text)
   }
</script>

<h2> 이벤트처리</h2>
<button on:click|once={handleClick}>Click me</button>
<Outer on:message={handleMessage} />