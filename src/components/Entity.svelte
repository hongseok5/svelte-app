<script>
    export let name;
    export let fields = [];
  </script>
  
  <div class="entity">
    <h3>{name}</h3>
    <ul>
      {#each fields as field}
        <li>{field}</li>
      {/each}
    </ul>
  </div>
  
  <style>
    .entity {
      border: 1px solid #333;
      padding: 10px;
      margin: 5px;
      width: 150px;
      background-color: #f9f9f9;
    }
  </style>
  