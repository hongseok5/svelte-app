
<style>
  main {
    grid-area: main;
    flex: 1;
    padding: 20px;
    transition: margin-left 0.3s ease;
    flex-grow: 1;
  }
  main.is-expanded {
        margin-left: 50px; /* 사이드 내비가 닫힌 상태 */
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
    import Team from '../pages/Team.svelte'
    import Strategy from '../pages/Strategy.svelte'
    import Match from '../pages/Match.svelte'
    import User from '../pages/User.svelte'
    import Word from '../pages/Word.svelte'
    import DashBoard from '../pages/DashBoard.svelte'
    import Join from '../pages/Join.svelte';
    import Login from '../pages/Login.svelte';

    export let isSideNavOpen = true;
    let page;
    $: selectedPage.subscribe(value => {
      page = value;
    });   
  // Main.svelte는 selectedPage 스토어의 값을 구독하고, 그 값에 따라 메인 화면에 다른 내용을 렌더링합니다.
</script>
<main class:is-expanded={!isSideNavOpen}>
    {#if page === 'home'}
        <h1>Home Page</h1>
    {:else if page === 'dashboard'}
      <DashBoard></DashBoard>
    {:else if page === 'contact'}
        <h1>Contact Page</h1>
    {:else if page === 'word'}
      <Word />
    {:else if page === 'user'}
      <User />   
    {:else if page === 'strategy'}
      <Strategy />       
    {:else if page === 'team'}
      <Team />          
    {:else if page === 'match'}
      <Match />                  
    {:else if page === 'join'}
      <Join />
    {:else if page === 'login'}
      <Login />     
    {/if}

</main>