<script>

  import Footer from './template/Footer.svelte'
  import SideNav from './template/SideNav.svelte'
  import Header from './template/Header.svelte'
  import Main from './template/Main.svelte'

  let mainId = "a"
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

</style>

<div class="container">

  <Header></Header>
  <SideNav />
  <Main></Main>

  <Footer />
</div>
