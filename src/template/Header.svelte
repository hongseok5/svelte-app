<style>
header {
  grid-area: header;
    background-color: #4CAF50;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

  }
  header h1 {
    margin: 0;
  }

  nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    margin-left: 20px;
  }

  nav ul li a {
    text-decoration: none;
    color: white;
    padding: 8px 16px;

    transition: background-color 0.3s, color 0.3s;
  }

  nav ul li a:hover {
    background-color: white;
    color: #4CAF50;
  }
</style>

<script>
  import { selectedPage, isLoggedIn } from '../store/store.js';
  const handleLogout = () => {
    isLoggedIn.set(false);
    localStorage.removeItem('token'); // JWT 토큰 삭제
    selectedPage.set("home")
  };
</script>
<header>
    <h1>My Web App</h1>
    <nav>
      {#if $isLoggedIn}
      <ul>
        <li><a href="#" on:click="{() => selectedPage.set('')}">내정보</a></li>
        <li><a href="#" on:click="{() => {
          selectedPage.set('home')
          handleLogout()
        }          
          }">로그아웃</a></li>

      </ul>
      {:else}
      <ul>
        <li><a href="#" on:click="{() => selectedPage.set('login')}">로그인</a></li>
        <li><a href="#" on:click="{() => selectedPage.set('join')}">회원가입</a></li>
      </ul>
      {/if}
    </nav>
  </header>