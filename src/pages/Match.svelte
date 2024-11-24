<script>
    import { onMount } from 'svelte';
    import Table from '../components/Table.svelte';  // Table 컴포넌트 임포트
    import { appConfig } from '../../config'
    let data = [];
    let columns = [
        { id: 'game_name',  name: '매치명' },
        { id: 'away_team_name',  name: '상대팀명' },        
        { id: 'rslt',  name: '경기결과' },
        { id: 'a_home_team_score', name: '우리득점' },
        { id: 'a_away_team_score',  name: '상대득점' },
        { id: 'b_datetime',  name: '경기일시' },
        { id: 'b_location',  name: '장소' }
    ];
  
    // 데이터를 fetch하는 함수
    const fetchData = async () => {
      console.log("fetchData")
      const response = await fetch(appConfig.apiEndpoint + "/match/matches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ homeTeamId : 1})
      });
      data = await response.json();
    };
  
    // 컴포넌트가 마운트될 때 데이터를 불러옵니다
    onMount(fetchData);
  </script>
  
  <div>
    <h1>매치기록</h1>
  
    <!-- Table 컴포넌트에 columns와 data를 전달 -->
    <Table {columns} {data} />
  </div>
  