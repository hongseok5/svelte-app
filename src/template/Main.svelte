
<style>
    main {
    grid-area: main;
    padding: 20px;
  }
/* 기본 버튼 스타일 */
button {
  background-color: #e0e0e0; /* 기본 배경색 */
  border: 1px solid #ccc; /* 기본 테두리 */
  color: #333; /* 기본 텍스트 색상 */
  padding: 10px 20px; /* 패딩 */
  font-size: 16px; /* 폰트 크기 */
  border-radius: 5px; /* 모서리 둥글게 */
  cursor: pointer; /* 클릭 가능한 커서 모양 */
  transition: background-color 0.3s ease; /* 배경색 전환 애니메이션 */
}

/* 버튼에 active 클래스가 있을 때의 스타일 */

</style>

<script>
    import { selectedPage } from '../store/store.js';
    import Tutorial from '../pages/Tutorial.svelte'
    import Tutorial2 from '../pages/Tutorial2.svelte'
    import Tutorial3 from '../pages/Tutorial3.svelte'
    import Tutorial6 from '../pages/Tutorial6.svelte'
    import Tutorial4 from '../pages/Tutorial4.svelte'
    import Tutorial5 from '../pages/Tutorial5.svelte'
    import Tutorial7 from '../pages/Tutorial7.svelte'
    import Tutorial8 from '../pages/Tutorial8.svelte'
    import Word from '../pages/Word.svelte'
    import DashBoard from '../pages/DashBoard.svelte'
    import App from '../App.svelte';
    let page;
    $: selectedPage.subscribe(value => {
      page = value;
      console.log(page)
    });   
  // Main.svelte는 selectedPage 스토어의 값을 구독하고, 그 값에 따라 메인 화면에 다른 내용을 렌더링합니다.
</script>
<main>
    {#if page === 'home'}
        <h1>Home Page</h1>
    {:else if page === 'dashboard'}
      <DashBoard></DashBoard>
    {:else if page === 'contact'}
        <h1>Contact Page</h1>
    {:else if page === 'word'}
      <Word />
    {:else if page === 'tutorial'}
      <Tutorial />   
    {:else if page === 'tutorial2'}
      <Tutorial2 />       
    {:else if page === 'tutorial4'}
      <Tutorial4 />        
    {:else if page === 'tutorial5'}
      <Tutorial5 />          
    {:else if page === 'tutorial6'}
      <Tutorial6 />     
    {:else if page === 'tutorial7'}
      <Tutorial7 />   
    {:else if page === 'tutorial8'}
      <Tutorial8 />                       
    {/if}

</main>