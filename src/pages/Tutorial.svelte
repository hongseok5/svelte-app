<script>
  import First from "../components/First.svelte"
  import Second from "../components/Second.svelte"
  import Child from "../components/Child.svelte"
  import { bubble } from "svelte/internal";
  let current = "foo"
  let current2 = "foo"
  let active = false
  let fontSize = 30
  let count = 0;
  //setTimeout(()=> count ++ , 1000)
  function handleClick(e){
    count += 1;
  }

  $: doubled = count * 2; // $문법(라벨문법) count가 업데이트시 재계산된다.

  let arr = []
  arr.push(1)
  function addNumber(){
    arr.push(arr.length + 1)
    arr = arr // 이렇게 할당을 다시 해야한다.
    console.log(arr)
  }

  let test ={
    foo: {
      bar: "bar"
    }
  }

  function handleClick2(){
    test.foo.bar = 'baz'
    // 아래처럼 하면 안된다. 최상위 test가 변경되어야 한다.
    //let foo = test.foo;
    //foo.bar = 'bak';
  }

  let count2 = 0;
  //$: console.log(`count2 : ${count2}`)
  /*
  $: {
    console.log(`count2 : ${count2}`)
    if(count2 >= 10){
      alert('count2가 10보다 크다')
    }
  }
    */
  $: if(count2 >= 10){
    alert('count2가 10보다 크니다')
  }   
</script>

<style>
button.active {
  background-color: #4CAF50; /* 활성화 상태일 때 초록색 배경 */
  color: white; /* 활성화 상태일 때 흰색 텍스트 */
  border: 1px solid #4CAF50; /* 테두리도 초록색으로 */
}

/* hover 시 스타일 */
button:hover {
  background-color: #d0d0d0; /* hover 시 조금 더 어두운 배경색 */
}
/* global을 쓰면 전역선택이 된다. Child 컴포넌트 안의 p 태그가 적용됨 
   svelte 고유의 클래스 부여 로직이 실행되지 않는다. */
div.active :global(p) {
  color: red;
}

.notused p {
  font-size: 30px;
}

.used :global(p) {
  font-size: 30px;
}
</style>


<h2>Tutorial</h2>
<p>count: {count}</p>
<p>This is where your main content will go.</p>
<button class:active="{current === 'foo'}" 
        on:click="{() => current = 'foo'}">
        foo
</button>
<p>두 개의 버튼은 같은 코드이다. 위에는 스벨트 문법</p>
<button class="{current2 === 'foo2' ? 'active' : ''}"
        on:click="{() => current2 = 'foo2'}">
  foo2
</button>
<p> 중괄호 안에 스크립트 변수를 읽고 쓰는게 모두 가능하다</p>
<button class:active={active} on:click={() => active = true}> active</button>
<button class:active on:click={() => active = true}> active2</button>
<p> 클래스속성 약어</p>
<p style="font-size:{fontSize}px;" on:click={() => fontSize +=1}>Hello World</p>
<div class:active>
  <Child />
  <button on:click={() => active = !active}> Togle </button>
  <div class="notused">
    <p> not use</p>
  </div>
  <div class="used">
    <p> use - global 함수를 사용하면 p태그에 클래스가 존재하지 않음</p>
  </div>
  <button on:click="{handleClick}" > count : {count}</button>
  <p>이런식으로 이벤트함수명만 전달한다.</p>
  <button on:click="{(e) => count +=1 }" > count : {count}</button>

</div>

<p>{arr}</p>
<button on:click="{addNumber}" > add</button>

<p>객체 test.foo.bar : {test.foo.bar}</p>
<button on:click="{handleClick2}">change</button>
<button on:click="{(event) => count += 1}"> count: {count}</button>
<p>{doubled}</p>

<button on:click="{(event) => {count2 +=1}}">count2 : {count2}</button>