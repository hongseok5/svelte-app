<script>
    import { onMount } from 'svelte';
    import { selectedPage } from '../store/store.js';
    import { appConfig } from '../../config'
    let id = '';
    let name = '';
    let password = '';
    let message = '';
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const res = await fetch(appConfig.apiEndpoint + '/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id, name, password }),
        });
  
        if (!res.ok) {
          const { message } = await res.json();
          alert(message);
          return;
        }
        message = '회원가입이 완료되었습니다.';
        selectedPage.set('login');
      } catch (error) {
        console.log(JSON.stringify(error))
        message = '서버 오류가 발생했습니다.';
      }
    };
  </script>
  
  <h1>회원가입</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="id">ID:</label>
    <input id="id" type="text" bind:value={id} required />
    
    <label for="nickname">닉네임:</label>
    <input id="nickname" type="text" bind:value={name} required />
    
    <label for="password">비밀번호:</label>
    <input id="password" type="password" bind:value={password} required />
    
    <button type="submit">회원가입</button>
    {#if message}
      <p>{message}</p>
    {/if}
  </form>
  