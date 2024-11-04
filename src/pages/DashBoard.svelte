<script>
    import { onMount } from "svelte";
    import { Chart, registerables } from "chart.js";
    
    Chart.register(...registerables);
  
    let chart1, chart2, chart3, chart4;
  
    // 차트 데이터를 생성하는 함수
    const createChart = (ctx, type, data, options) => {
      return new Chart(ctx, {
        type,
        data,
        options
      });
    };
  
    // 컴포넌트가 마운트된 후 차트를 생성
    onMount(() => {
      chart1 = createChart(document.getElementById('chart1').getContext('2d'), 'bar', {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Dataset 1',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      }, { responsive: true });
  
      chart2 = createChart(document.getElementById('chart2').getContext('2d'), 'line', {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Dataset 2',
          data: [65, 59, 80, 81, 56, 55],
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false
        }]
      }, { responsive: true });
  
      chart3 = createChart(document.getElementById('chart3').getContext('2d'), 'pie', {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      }, { responsive: true });
  
      chart4 = createChart(document.getElementById('chart4').getContext('2d'), 'radar', {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
          label: 'Dataset 4',
          data: [65, 59,  56, 55, 40],
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)'
        }]
      }, { responsive: true });
    });
  </script>
  
  <!-- 대시보드 그리드 레이아웃 -->

    <div class="dashboard">
        <div class="chart-container">
        <canvas id="chart1"></canvas>
        </div>
        <div class="chart-container">
        <canvas id="chart2"></canvas>
        </div>
        <div class="chart-container">
        <canvas id="chart3"></canvas>
        </div>
        <div class="chart-container">
        <canvas id="chart4"></canvas>
        </div>
    </div>

  <!-- 스타일 적용 -->
  <style>

    .main-container {
        display: flex;
        flex-direction: column;
        height: 100vh; /* 전체 화면 높이를 차지 */
    }
    .dashboard {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto auto;
      gap: 10px;
      padding: 20px;
      flex-grow: 1; /* 대시보드가 남은 영역을 모두 차지 */
    }
  
    .chart-container {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    canvas {
        width: 100% !important;
        height: 100% !important;
    }
  </style>
  