<script>
  import {selectedPage} from "../store/store.js"
  import {onMount } from 'svelte'
  import { appConfig } from '../../config'
  import { createEventDispatcher } from 'svelte';
  export let isSideNavOpen = true;
  let menuItems = [];   // DB에서 받아온다
  let hoveredItem = null;
  function handleClick(page){
    console.log(page)
    selectedPage.set(page)
  }
  const dispatch = createEventDispatcher();

  function toggle() {
    console.log("toggle")
      dispatch('toggle');
  }
  onMount(async () => {
    console.log(isSideNavOpen)
    const res = await fetch( appConfig.apiEndpoint + "/common/menu")
    menuItems = await res.json(res)
 })
 function handleMouseEnter(item) {
   console.log("handleMouseEnter" + JSON.stringify(item))
    hoveredItem = item.menu_name;
  }

  function handleMouseLeave() {
    hoveredItem = null;
  }
  //SideNav.svelte에서 사용자가 버튼을 클릭할 때마다 selectedPage 스토어에 해당 페이지를 설정합니다.
  // 사이드 목록 호버했을때 툴팁 나타나게 
  // 메뉴에 우선순위 부여해서 출력하기
</script>

<style>
  nav {
    grid-area: sidebar;
    background-color: #333;
    color: white;
    padding: 20px;
    transition: width 0.3s ease;
    overflow: visible;
    position: relative;
    flex-shrink: 0; /* 메인 영역 침범 방지 */
  }
  nav.is-closed {
        width: 50px;
  }

  nav.is-closed .toggle-button {
    position: absolute;
    top: 10px;
    left: 10px;
    transform: translateX(0);
  }

  .toggle-button {
    background-color: #555;
    color: white;
    border: 1px solid #777;
    padding: 5px 10px;
    font-size: 1.2em;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  nav ul {
    list-style: none;
    padding: 0;
  }

  nav ul li {
    margin: 10px 0;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
  }
  nav ul li:hover .tooltip {
    visibility: visible;
  }

  .tooltip {
    position: absolute;
    left: 100%; /* Position tooltip to the right of the link */
    top: 50%;
    transform: translateY(-50%);
    margin-left: 10px;
    padding: 5px;
    background-color: #666;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 1; /* Ensure tooltip appears on top */
  }
</style>

<nav class:is-closed={!isSideNavOpen}>

  {#if isSideNavOpen}

    <ul>
      {#each menuItems as item}
        <li on:mouseenter={() => handleMouseEnter(item)} on:mouseleave={handleMouseLeave}>
          <a on:click={() => handleClick(item.menu_id)} title="{item.menu_name}"> {item.menu_id} </a>

        </li>
      {/each}
    </ul>
  {/if}
</nav>