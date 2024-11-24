<script>
  import { onMount } from 'svelte';
  import { Grid } from 'gridjs';
  import 'gridjs/dist/theme/mermaid.css';

  export let columns = [];  // 테이블의 컬럼 정보
  export let data = [];  // 테이블에 표시할 데이터

  let gridInstance;

  // Grid.js 테이블을 렌더링
  onMount(() => {
    gridInstance = new Grid({
      columns,
      data,
      pagination: {
        limit: 5, // 한 페이지에 표시할 항목 수
      },
      search: true, // 검색 기능 활성화
      sort: true, // 정렬 기능 활성화
      resizable: true, // 열 크기 조정 기능
    }).render(document.getElementById('grid-table'));
  });

  // 데이터 변경 시 Grid.js를 업데이트하는 함수
  $: {
    if (gridInstance) {
      gridInstance.updateConfig({
        data
      }).forceRender();
    }
  }
</script>

<!-- 테이블을 렌더링할 div 요소 -->
<div id="grid-table"></div>
