  <script>
    import { selectedPage, isLoggedIn } from '../store/store.js';
    import { appConfig } from '../../config'
    let id = '';
    let password = '';
    let message = '';

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const res = await fetch(appConfig.apiEndpoint + '/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id, password }),
        });

        const responseBody = await res.json();

        if (!res.ok) {
          alert(responseBody.message);
          return;
        }

        // JWT 저장
        localStorage.setItem('token', responseBody.token);
        message = '로그인 성공!';
        selectedPage.set('dashboard'); // 로그인 성공 후 대시보드로 이동
        isLoggedIn.set(true)
      } catch (error) {
        message = '서버 오류가 발생했습니다.';
      }
    };
  </script>
  
  <h1>로그인</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="id">ID:</label>
    <input id="id" type="text" bind:value={id} required />
  
    <label for="password">비밀번호:</label>
    <input id="password" type="password" bind:value={password} required />
  
    <button type="submit">로그인</button>
    {#if message}
      <p>{message}</p>
    {/if}
  </form>