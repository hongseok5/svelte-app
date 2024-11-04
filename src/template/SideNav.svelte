<style>
  nav {
    grid-area: sidebar;
    background-color: #333;
    color: white;
    padding: 20px;
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
</style>

<script>
  import {selectedPage} from "../store/store.js"

  function handleClick(page){
    console.log(page)
    selectedPage.set(page)
  }

  let menuItems = [
    "Home", "DashBoard", "Services", "Tutorial", "Tutorial2", "Tutorial3"
    , "Tutorial4","Tutorial5","Tutorial6", "Tutorial7", "Tutorial8", "Word"];   // DB에서 받아온다
  //SideNav.svelte에서 사용자가 버튼을 클릭할 때마다 selectedPage 스토어에 해당 페이지를 설정합니다.
</script>
<nav>
    <ul>
      {#each menuItems as item}
        <li><a on:click={() => handleClick(item.toLowerCase())}>{item}</a></li>
      {/each}
    </ul>
</nav>