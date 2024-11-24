<script>

  import Footer from './template/Footer.svelte'
  import SideNav from './template/SideNav.svelte'
  import Header from './template/Header.svelte'
  import Main from './template/Main.svelte'
  let isSideNavOpen = true;
  function toggleSideNav() {
        isSideNavOpen = !isSideNavOpen;
    }
</script>

<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  .container {
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px 1fr 40px;
    height: 100vh;
  }

  .toggle-tab {
        position: absolute;
        top: 50%;
        left: var(--tab-position);
        transform: translateY(-50%);
        background-color: #555;
        color: white;
        border: 1px solid #777;
        border-radius: 0 5px 5px 0;
        width: 30px;
        height: 80px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: left 0.3s ease, background-color 0.3s ease;
    }
    .toggle-tab:hover {
        background-color: #777;
    }

    :global(:root) {
        --tab-position: 200px; /* 초기값 */
    }

</style>

<div class="container">

  <Header></Header>
  <SideNav {isSideNavOpen}/>
  <Main  {isSideNavOpen}></Main>
  <Footer />
</div>
