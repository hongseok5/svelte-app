
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
    import Word from '../pages/Word.svelte'
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
    {:else if page === 'about'}
        <h1>About Page</h1>
    {:else if page === 'contact'}
        <h1>Contact Page</h1>
    {:else if page === 'word'}
      <Word />
    {:else }
      <Tutorial />      
    {/if}

</main>