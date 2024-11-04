<script>

 import Box from "../components/Box.svelte"
 import Context from '../Context.svelte'
 import Module from '../Module.svelte'
</script>
  
<h2>Tutorial8 - slot 컴포넌트의 하위요소를 가지게 하는 기능 </h2>
  
<Box>
  <p>Box 컴포넌트의 하위요소</p>
</Box>

<Box />

<h2>Tutorial9 - 컨텍스트 API. store는 작은 값을 구독해야할때, 컨텍스트는 많은 데이터를 부모에서 자식으로 보낼때 </h2>

<Context name="첫번째 콘텍스트" />
<Context name="두번째 콘텍스트" />

<p>스토어는 모든 컴포넌트에서 데이터를 공유한다</p>
<p>컨텍스트는 해당컴포넌트와 하위컴포넌트에서 공유한다.</p>
<p>그렇기에 하나의 컴포넌트로 여러 인스턴스를 생성하면 데이터가 공유되지 않는다.</p>
<p>컨텍스트는 반응형으로 동작하지 않는다. 즉, 자동으로 업데이트 되지 않는다.</p>

<h2> svlete 모듈 컨텍스트</h2>
<Module />
<Module />
<Module />